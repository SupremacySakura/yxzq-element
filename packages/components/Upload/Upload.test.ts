import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperUpload,
  SUPER_UPLOAD_TAG,
  SuperUpload,
  type SuperUploadChangeDetail,
  type SuperUploadExceedDetail,
  type SuperUploadRemoveDetail,
  type SuperUploadSubmitDetail,
} from "./index.js";

const mountUpload = async (
  configure?: (element: SuperUpload) => void,
): Promise<SuperUpload> => {
  defineSuperUpload();
  const element = document.createElement(SUPER_UPLOAD_TAG);
  configure?.(element);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

const getInput = (element: SuperUpload) =>
  element.shadowRoot?.querySelector<HTMLInputElement>("input[type='file']");

const getDropzone = (element: SuperUpload) =>
  element.shadowRoot?.querySelector<HTMLElement>(".dropzone");

const makeFile = (
  name: string,
  size = 4,
  type = "text/plain",
): File => {
  const file = new File(["x"], name, { type, lastModified: 1 });
  Object.defineProperty(file, "size", { configurable: true, value: size });
  return file;
};

const chooseFiles = (element: SuperUpload, files: File[]): void => {
  const input = getInput(element);
  expect(input).toBeDefined();
  if (!input) return;

  Object.defineProperty(input, "files", {
    configurable: true,
    value: files,
  });
  input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};

const dropFiles = (element: SuperUpload, files: File[]): void => {
  const dropzone = getDropzone(element);
  expect(dropzone).toBeDefined();
  if (!dropzone) return;

  const event = new Event("drop", {
    bubbles: true,
    composed: true,
    cancelable: true,
  }) as DragEvent;
  Object.defineProperty(event, "dataTransfer", {
    configurable: true,
    value: { files },
  });
  dropzone.dispatchEvent(event);
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperUpload", () => {
  it("registers the tag idempotently and exposes stable defaults", async () => {
    expect(defineSuperUpload()).toBe(SuperUpload);
    expect(defineSuperUpload()).toBe(SuperUpload);
    expect(customElements.get(SUPER_UPLOAD_TAG)).toBe(SuperUpload);

    const element = await mountUpload();
    expect(element.accept).toBe("");
    expect(element.multiple).toBe(false);
    expect(element.disabled).toBe(false);
    expect(element.maxCount).toBeUndefined();
    expect(element.maxSize).toBeUndefined();
    expect(element.autoUpload).toBe(false);
    expect(element.fileList).toEqual([]);
    expect(element.value).toEqual([]);
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.promptText).toBe("选择文件");
    expect(element.hintText).toBe("或将文件拖到这里");
    expect(element.removeLabel).toBe("移除文件");
    expect(element.accessibleLabel).toBe("上传文件");
  });

  it("reflects primitive state and keeps fileList as a JS property", async () => {
    const element = await mountUpload();
    const file = makeFile("notes.txt");
    element.accept = "image/*";
    element.multiple = true;
    element.disabled = true;
    element.maxCount = 3;
    element.maxSize = 2048;
    element.autoUpload = true;
    element.fileList = [file];
    element.size = "large";
    element.validation = "warning";
    await element.updateComplete;

    expect(element.getAttribute("accept")).toBe("image/*");
    expect(element.hasAttribute("multiple")).toBe(true);
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.getAttribute("max-count")).toBe("3");
    expect(element.getAttribute("max-size")).toBe("2048");
    expect(element.hasAttribute("auto-upload")).toBe(true);
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("validation")).toBe("warning");
    expect(element.hasAttribute("file-list")).toBe(false);
    expect(element.fileList).toEqual([file]);
    expect(element.value).toEqual(["notes.txt"]);
  });

  it("derives a read-only value view from fileList names in order", async () => {
    const element = await mountUpload();
    const files = [
      makeFile("first.txt"),
      makeFile("second.pdf", 12, "application/pdf"),
      makeFile("third.png", 24, "image/png"),
    ];

    element.fileList = files;
    await element.updateComplete;

    expect(element.value).toEqual(["first.txt", "second.pdf", "third.png"]);

    element.fileList = [files[2] as File];
    expect(element.value).toEqual(["third.png"]);
  });

  it("adds selected files and emits composed change/submit events", async () => {
    const element = await mountUpload((upload) => {
      upload.autoUpload = true;
    });
    const onChange = vi.fn();
    const onSubmit = vi.fn();
    element.addEventListener("super-upload-change", onChange);
    element.addEventListener("super-upload-submit", onSubmit);
    const file = makeFile("report.pdf", 8, "application/pdf");

    chooseFiles(element, [file]);

    expect(element.fileList).toEqual([file]);
    expect(onChange).toHaveBeenCalledTimes(1);
    const change = onChange.mock.calls[0]?.[0] as CustomEvent<SuperUploadChangeDetail>;
    expect(change.detail.fileList).toEqual([file]);
    expect(change.bubbles).toBe(true);
    expect(change.composed).toBe(true);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    const submit = onSubmit.mock.calls[0]?.[0] as CustomEvent<SuperUploadSubmitDetail>;
    expect(submit.detail.files).toEqual([file]);
    expect(submit.bubbles).toBe(true);
    expect(submit.composed).toBe(true);
  });

  it("does not emit submit when autoUpload is false", async () => {
    const element = await mountUpload();
    const onSubmit = vi.fn();
    element.addEventListener("super-upload-submit", onSubmit);

    chooseFiles(element, [makeFile("one.txt")]);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("enforces maxCount and reports the rejected files", async () => {
    const element = await mountUpload((upload) => {
      upload.maxCount = 2;
      upload.multiple = true;
      upload.fileList = [makeFile("old.txt")];
    });
    const onChange = vi.fn();
    const onExceed = vi.fn();
    element.addEventListener("super-upload-change", onChange);
    element.addEventListener("super-upload-exceed", onExceed);
    const first = makeFile("a.txt");
    const second = makeFile("b.txt");

    chooseFiles(element, [first, second]);

    expect(element.fileList).toHaveLength(2);
    expect(element.fileList[1]).toBe(first);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onExceed).toHaveBeenCalledTimes(1);
    const exceed = onExceed.mock.calls[0]?.[0] as CustomEvent<SuperUploadExceedDetail>;
    expect(exceed.detail).toEqual({ files: [second], reason: "max-count" });
    expect(exceed.bubbles).toBe(true);
    expect(exceed.composed).toBe(true);
  });

  it("enforces maxSize and keeps valid files", async () => {
    const element = await mountUpload((upload) => {
      upload.maxSize = 10;
      upload.multiple = true;
    });
    const onChange = vi.fn();
    const onExceed = vi.fn();
    element.addEventListener("super-upload-change", onChange);
    element.addEventListener("super-upload-exceed", onExceed);
    const small = makeFile("small.txt", 10);
    const large = makeFile("large.txt", 11);

    chooseFiles(element, [small, large]);

    expect(element.fileList).toEqual([small]);
    expect(onChange).toHaveBeenCalledTimes(1);
    const exceed = onExceed.mock.calls[0]?.[0] as CustomEvent<SuperUploadExceedDetail>;
    expect(exceed.detail).toEqual({ files: [large], reason: "max-size" });
  });

  it("supports drag and drop and keyboard activation", async () => {
    const element = await mountUpload();
    const onChange = vi.fn();
    element.addEventListener("super-upload-change", onChange);
    const file = makeFile("dropped.png", 3, "image/png");
    const dropzone = getDropzone(element);

    expect(dropzone).toBeDefined();
    if (!dropzone) return;

    dropzone.dispatchEvent(
      new Event("dragover", {
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await element.updateComplete;
    expect(dropzone.hasAttribute("data-dragging")).toBe(true);

    dropFiles(element, [file]);
    await element.updateComplete;
    expect(element.fileList).toEqual([file]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(dropzone.hasAttribute("data-dragging")).toBe(false);

    const click = vi.spyOn(getInput(element) as HTMLInputElement, "click");
    dropzone.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(click).toHaveBeenCalledTimes(1);

    dropzone.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(click).toHaveBeenCalledTimes(2);
  });

  it("removes a file and emits the removed file plus the next list", async () => {
    const first = makeFile("first.txt");
    const second = makeFile("second.txt");
    const element = await mountUpload((upload) => {
      upload.fileList = [first, second];
    });
    const onRemove = vi.fn();
    element.addEventListener("super-upload-remove", onRemove);

    const remove = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="remove-button"]',
    );
    expect(remove?.getAttribute("aria-label")).toBe("移除文件：first.txt");
    remove?.click();

    expect(element.fileList).toEqual([second]);
    expect(onRemove).toHaveBeenCalledTimes(1);
    const event = onRemove.mock.calls[0]?.[0] as CustomEvent<SuperUploadRemoveDetail>;
    expect(event.detail).toEqual({ file: first, fileList: [second] });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("does not emit user events for programmatic fileList changes", async () => {
    const element = await mountUpload();
    const onChange = vi.fn();
    const onRemove = vi.fn();
    element.addEventListener("super-upload-change", onChange);
    element.addEventListener("super-upload-remove", onRemove);
    const file = makeFile("programmatic.txt");

    element.fileList = [file];
    await element.updateComplete;

    expect(element.shadowRoot?.querySelectorAll('[part="file"]')).toHaveLength(1);
    expect(onChange).not.toHaveBeenCalled();
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("exposes accessible dragzone semantics and blocks interaction when disabled", async () => {
    const element = await mountUpload((upload) => {
      upload.disabled = true;
      upload.fileList = [makeFile("locked.txt")];
      upload.accessibleLabel = "Upload attachments";
      upload.removeLabel = "Remove file";
    });
    const onChange = vi.fn();
    element.addEventListener("super-upload-change", onChange);
    const dropzone = getDropzone(element);
    const remove = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="remove-button"]',
    );

    expect(getInput(element)?.hidden).toBe(true);
    expect(dropzone?.getAttribute("role")).toBe("button");
    expect(dropzone?.getAttribute("aria-label")).toBe("Upload attachments");
    expect(dropzone?.getAttribute("aria-disabled")).toBe("true");
    expect(dropzone?.hasAttribute("tabindex")).toBe(false);
    expect(remove?.disabled).toBe(true);
    expect(remove?.getAttribute("aria-label")).toBe("Remove file：locked.txt");

    if (!dropzone) return;
    dropFiles(element, [makeFile("ignored.txt")]);
    dropzone.click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("filters by accept and respects single selection", async () => {
    const element = await mountUpload((upload) => {
      upload.accept = ".txt";
    });
    const onExceed = vi.fn();
    element.addEventListener("super-upload-exceed", onExceed);
    const text = makeFile("keep.txt");
    const image = makeFile("skip.png", 4, "image/png");

    chooseFiles(element, [text, image]);
    expect(element.fileList).toEqual([text]);
    expect(onExceed).not.toHaveBeenCalled();

    const secondText = makeFile("second.txt");
    chooseFiles(element, [secondText]);
    expect(element.fileList).toEqual([text, secondText]);
  });

  it("supports MIME wildcards in accept", async () => {
    const element = await mountUpload((upload) => {
      upload.accept = "image/*";
    });
    const image = makeFile("photo.png", 4, "image/png");
    const text = makeFile("notes.txt", 4, "text/plain");

    chooseFiles(element, [image, text]);

    expect(element.fileList).toEqual([image]);
  });

  it("keeps duplicate files from being appended twice", async () => {
    const element = await mountUpload();
    const file = makeFile("same.txt");

    chooseFiles(element, [file]);
    chooseFiles(element, [file]);

    expect(element.fileList).toEqual([file]);
  });

  it("forwards focus and blur to the dropzone", async () => {
    const element = await mountUpload();
    const dropzone = getDropzone(element);

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(dropzone);

    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });
});
