import { afterEach, describe, expect, it, vi } from "vitest";
import { defineSuperTable, SUPER_TABLE_TAG, SuperTable } from "./index.js";

const columns = [
  { key: "name", title: "姓名" },
  { key: "role", title: "角色" },
  { key: "score", title: "分数", align: "right" as const },
];

const rows = [
  { id: "a", name: "阿青", role: "画师", score: 92 },
  { id: "b", name: "小满", role: "编辑", score: 85 },
  { id: "c", name: "老周", role: "校对", score: 78 },
];

const mountTable = async (
  configure?: (element: SuperTable) => void,
): Promise<SuperTable> => {
  defineSuperTable();
  const element = document.createElement(SUPER_TABLE_TAG);
  configure?.(element);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

const bodyRows = (element: SuperTable) =>
  Array.from(element.shadowRoot?.querySelectorAll("tbody tr") ?? []);

const headerCells = (element: SuperTable) =>
  Array.from(
    element.shadowRoot?.querySelectorAll<HTMLTableCellElement>("thead th") ??
      [],
  );

const cellTexts = (row: Element) =>
  Array.from(row.querySelectorAll("td"), (cell) =>
    cell.textContent?.replace(/\s+/g, " ").trim(),
  );

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperTable", () => {
  it("registers super-table idempotently", () => {
    expect(defineSuperTable()).toBe(SuperTable);
    expect(defineSuperTable()).toBe(SuperTable);
    expect(customElements.get(SUPER_TABLE_TAG)).toBe(SuperTable);
  });

  it("provides stable defaults", async () => {
    const element = await mountTable();

    expect(element.columns).toEqual([]);
    expect(element.rows).toEqual([]);
    expect(element.rowKey).toBe("id");
    expect(element.selectable).toBe(false);
    expect(element.selectedKeys).toEqual([]);
    expect(element.sortKey).toBe("");
    expect(element.sortDirection).toBe("");
    expect(element.loading).toBe(false);
    expect(element.emptyText).toBe("暂无数据");
    expect(element.size).toBe("medium");
    expect(element.striped).toBe(false);
    expect(element.bordered).toBe(false);
    expect(element.showHeader).toBe(true);
    expect(element.stickyHeader).toBe(false);
    expect(element.selectAllLabel).toBe("全选");
    expect(element.selectRowLabel).toBe("选择此行");
    expect(element.loadingText).toBe("数据加载中");
    expect(element.accessibleLabel).toBe("数据表格");
  });

  it("reflects primitive options and keeps data properties off attributes", async () => {
    const element = await mountTable();

    element.rowKey = "uid";
    element.selectable = true;
    element.loading = false;
    element.emptyText = "还没有记录";
    element.size = "small";
    element.striped = true;
    element.bordered = true;
    element.showHeader = false;
    element.stickyHeader = true;
    element.columns = columns;
    element.rows = rows;
    element.selectedKeys = ["a"];
    await element.updateComplete;

    expect(element.getAttribute("row-key")).toBe("uid");
    expect(element.hasAttribute("selectable")).toBe(true);
    expect(element.getAttribute("empty-text")).toBe("还没有记录");
    expect(element.getAttribute("size")).toBe("small");
    expect(element.hasAttribute("striped")).toBe(true);
    expect(element.hasAttribute("bordered")).toBe(true);
    expect(element.hasAttribute("show-header")).toBe(false);
    expect(element.hasAttribute("sticky-header")).toBe(true);
    expect(element.hasAttribute("columns")).toBe(false);
    expect(element.hasAttribute("rows")).toBe(false);
    expect(element.hasAttribute("selected-keys")).toBe(false);
  });

  it("drops sort attributes when the sort is cleared", async () => {
    const element = await mountTable();

    element.sortKey = "name";
    element.sortDirection = "asc";
    await element.updateComplete;
    expect(element.getAttribute("sort-key")).toBe("name");
    expect(element.getAttribute("sort-direction")).toBe("asc");

    element.sortKey = "";
    element.sortDirection = "";
    await element.updateComplete;
    expect(element.hasAttribute("sort-key")).toBe(false);
    expect(element.hasAttribute("sort-direction")).toBe(false);
  });

  it("renders columns, rows and aligned cells", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
    });

    expect(headerCells(element).map((cell) => cell.textContent?.trim())).toEqual(
      ["姓名", "角色", "分数"],
    );
    expect(headerCells(element).every((cell) => cell.scope === "col")).toBe(
      true,
    );

    const rendered = bodyRows(element);
    expect(rendered).toHaveLength(3);
    expect(cellTexts(rendered[0] as Element)).toEqual(["阿青", "画师", "92"]);
    expect(
      (rendered[1]?.querySelectorAll("td")[2] as HTMLElement).style.textAlign,
    ).toBe("right");
    expect(element.shadowRoot?.querySelector("colgroup col")).not.toBeNull();
  });

  it("uses a formatter and falls back to raw values", async () => {
    const formatter = vi.fn((value: unknown) => `${String(value)} 分`);
    const element = await mountTable((table) => {
      table.columns = [
        { key: "name", title: "姓名" },
        { key: "score", title: "分数", formatter },
      ];
      table.rows = rows;
    });

    const rendered = bodyRows(element);
    expect(cellTexts(rendered[0] as Element)).toEqual(["阿青", "92 分"]);
    expect(formatter).toHaveBeenCalledWith(92, rows[0], 0);
    expect(formatter).toHaveBeenCalledWith(85, rows[1], 1);
  });

  it("lets a cell slot replace the rendered value", async () => {
    const element = await mountTable((table) => {
      table.columns = [{ key: "name", title: "姓名" }];
      table.rows = rows;
    });

    const badge = document.createElement("strong");
    badge.slot = "cell-name";
    badge.textContent = "自定义姓名";
    element.append(badge);
    await element.updateComplete;

    const slots = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLSlotElement>("tbody slot") ?? [],
    );
    const nameSlot = slots.find((slot) => slot.name === "cell-name");

    expect(nameSlot).toBeDefined();
    expect(nameSlot?.assignedElements()).toContain(badge);
  });

  it("renders an accessible empty row with overridable text", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.emptyText = "还没有成员";
    });

    const row = bodyRows(element)[0];
    expect(row?.getAttribute("role")).toBe("row");
    expect(row?.querySelector('[part~="empty"]')?.textContent).toContain(
      "还没有成员",
    );
    expect(row?.querySelector("td")?.getAttribute("colspan")).toBe("3");
    expect(
      element.shadowRoot?.querySelector('tbody [part~="loading"]'),
    ).toBeNull();
  });

  it("renders hand-drawn skeleton rows while loading", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
      table.loading = true;
    });

    const table = element.shadowRoot?.querySelector("table");
    expect(table?.getAttribute("aria-busy")).toBe("true");

    const rendered = bodyRows(element);
    expect(rendered).toHaveLength(3);
    expect(rendered.every((row) => row.classList.contains("skeleton-row"))).toBe(
      true,
    );
    expect(
      rendered[0]?.querySelectorAll(".skeleton-bar"),
    ).toHaveLength(3);
    expect(
      element.shadowRoot?.querySelector('tbody[part~="loading"]'),
    ).not.toBeNull();
    expect(element.shadowRoot?.querySelector(".empty-row")).toBeNull();
  });

  it("cycles sortable headers through asc, desc and none", async () => {
    const element = await mountTable((table) => {
      table.columns = [
        { key: "name", title: "姓名", sortable: true },
        { key: "role", title: "角色" },
      ];
      table.rows = rows;
    });

    const onSort = vi.fn();
    document.body.addEventListener("super-table-sort", onSort);
    const sortableHeader = headerCells(element)[0];
    const button = sortableHeader?.querySelector<HTMLButtonElement>("button");

    button?.click();
    await element.updateComplete;
    expect(sortableHeader?.getAttribute("aria-sort")).toBe("ascending");
    expect(element.sortKey).toBe("name");
    expect(element.sortDirection).toBe("asc");

    button?.click();
    await element.updateComplete;
    expect(sortableHeader?.getAttribute("aria-sort")).toBe("descending");
    expect(element.sortDirection).toBe("desc");

    button?.click();
    await element.updateComplete;
    expect(sortableHeader?.getAttribute("aria-sort")).toBe("none");
    expect(element.sortKey).toBe("");
    expect(element.sortDirection).toBe("");

    expect(onSort).toHaveBeenCalledTimes(3);
    expect(
      onSort.mock.calls.map(
        (call) => (call[0] as CustomEvent<{ direction: string }>).detail,
      ),
    ).toEqual([
      { key: "name", direction: "asc" },
      { key: "name", direction: "desc" },
      { key: "name", direction: "none" },
    ]);
    expect((onSort.mock.calls[0]?.[0] as CustomEvent).bubbles).toBe(true);
    expect((onSort.mock.calls[0]?.[0] as CustomEvent).composed).toBe(true);
  });

  it("leaves non-sortable headers without a sort control", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
    });

    const roleHeader = headerCells(element)[1];
    expect(roleHeader?.querySelector("button")).toBeNull();
    expect(roleHeader?.hasAttribute("aria-sort")).toBe(false);
  });

  it("marks aria-sort from a controlled sort state", async () => {
    const element = await mountTable((table) => {
      table.columns = [
        { key: "name", title: "姓名", sortable: true },
        { key: "score", title: "分数", sortable: true },
      ];
      table.rows = rows;
      table.sortKey = "score";
      table.sortDirection = "desc";
    });

    expect(headerCells(element)[0]?.getAttribute("aria-sort")).toBe("none");
    expect(headerCells(element)[1]?.getAttribute("aria-sort")).toBe(
      "descending",
    );
  });

  it("selects all rows, then clears them, with a composed event", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
      table.selectable = true;
    });

    const onSelect = vi.fn();
    document.body.addEventListener("super-table-select", onSelect);
    const selectAll = headerCells(element)[0]?.querySelector<HTMLInputElement>(
      "input",
    );

    expect(selectAll?.checked).toBe(false);
    expect(selectAll?.indeterminate).toBe(false);

    selectAll?.click();
    await element.updateComplete;
    expect(element.selectedKeys).toEqual(["a", "b", "c"]);
    expect(selectAll?.checked).toBe(true);
    expect(selectAll?.indeterminate).toBe(false);
    expect(
      bodyRows(element).every(
        (row) => row.querySelector<HTMLInputElement>("input")?.checked,
      ),
    ).toBe(true);

    const selectEvent = onSelect.mock.calls[0]?.[0] as CustomEvent<{
      selectedKeys: string[];
      row: unknown;
      selected: boolean;
    }>;
    expect(selectEvent.detail).toEqual({
      selectedKeys: ["a", "b", "c"],
      row: null,
      selected: true,
    });
    expect(selectEvent.bubbles).toBe(true);
    expect(selectEvent.composed).toBe(true);

    selectAll?.click();
    await element.updateComplete;
    expect(element.selectedKeys).toEqual([]);
    expect(selectAll?.checked).toBe(false);
  });

  it("toggles a single row and reports partial selection as indeterminate", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
      table.selectable = true;
    });

    const onSelect = vi.fn();
    document.body.addEventListener("super-table-select", onSelect);
    const firstRowInput = bodyRows(element)[0]?.querySelector<HTMLInputElement>(
      "input",
    );
    const selectAll = headerCells(element)[0]?.querySelector<HTMLInputElement>(
      "input",
    );

    firstRowInput?.click();
    await element.updateComplete;

    expect(element.selectedKeys).toEqual(["a"]);
    expect(selectAll?.indeterminate).toBe(true);
    expect(selectAll?.checked).toBe(false);
    expect(
      onSelect.mock.calls[0]?.[0]?.detail,
    ).toEqual({ selectedKeys: ["a"], row: rows[0], selected: true });

    firstRowInput?.click();
    await element.updateComplete;
    expect(element.selectedKeys).toEqual([]);
    expect(selectAll?.indeterminate).toBe(false);
    expect(
      onSelect.mock.calls[1]?.[0]?.detail,
    ).toEqual({ selectedKeys: [], row: rows[0], selected: false });
  });

  it("keeps controlled selections when rows change", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
      table.selectable = true;
      table.selectedKeys = ["b"];
    });

    expect(
      bodyRows(element).map(
        (row) => row.querySelector<HTMLInputElement>("input")?.checked,
      ),
    ).toEqual([false, true, false]);
    expect(
      headerCells(element)[0]?.querySelector<HTMLInputElement>("input")
        ?.indeterminate,
    ).toBe(true);

    element.rows = [rows[1] as (typeof rows)[number]];
    await element.updateComplete;
    expect(
      headerCells(element)[0]?.querySelector<HTMLInputElement>("input")?.checked,
    ).toBe(true);
  });

  it("falls back to row indexes when the row key is missing", async () => {
    const element = await mountTable((table) => {
      table.columns = [{ key: "name", title: "姓名" }];
      table.rows = [{ name: "甲" }, { name: "乙" }];
      table.selectable = true;
    });

    headerCells(element)[0]?.querySelector<HTMLInputElement>("input")?.click();
    await element.updateComplete;
    expect(element.selectedKeys).toEqual(["0", "1"]);
  });

  it("disables selection and sorting while loading", async () => {
    const element = await mountTable((table) => {
      table.columns = [{ key: "name", title: "姓名", sortable: true }];
      table.rows = rows;
      table.selectable = true;
      table.loading = true;
    });

    const inputs = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLInputElement>(
        'input[type="checkbox"]',
      ) ?? [],
    );
    expect(inputs.length).toBe(1);
    expect(inputs.every((input) => input.disabled)).toBe(true);
    expect(
      element.shadowRoot?.querySelector<HTMLButtonElement>(".sort-button")
        ?.disabled,
    ).toBe(true);
  });

  it("hides the header when showHeader is false", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
      table.showHeader = false;
    });

    expect(element.shadowRoot?.querySelector("thead")).toBeNull();
    expect(bodyRows(element)).toHaveLength(3);
  });

  it("accepts show-header=false from markup", async () => {
    defineSuperTable();
    document.body.innerHTML =
      '<super-table show-header="false"></super-table>';
    const element = document.body.querySelector(
      "super-table",
    ) as SuperTable;
    element.columns = columns;
    element.rows = rows;
    await element.updateComplete;

    expect(element.showHeader).toBe(false);
    expect(element.shadowRoot?.querySelector("thead")).toBeNull();
  });

  it("keeps native focus order for sort buttons and row checkboxes", async () => {
    const element = await mountTable((table) => {
      table.columns = [{ key: "name", title: "姓名", sortable: true }];
      table.rows = rows;
      table.selectable = true;
    });

    const sortButton =
      element.shadowRoot?.querySelector<HTMLButtonElement>(".sort-button");
    const rowInput = bodyRows(element)[0]?.querySelector<HTMLInputElement>(
      'input[type="checkbox"]',
    );

    expect(sortButton?.tabIndex).toBe(0);
    expect(rowInput?.tabIndex).toBe(0);
    expect(rowInput?.getAttribute("aria-label")).toBe("选择此行");

    rowInput?.focus();
    expect(element.shadowRoot?.activeElement).toBe(rowInput);

    sortButton?.focus();
    expect(element.shadowRoot?.activeElement).toBe(sortButton);
  });

  it("exposes the documented parts", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
      table.selectable = true;
    });

    const parts = Array.from(
      element.shadowRoot?.querySelectorAll("[part]") ?? [],
    ).flatMap((node) => (node.getAttribute("part") ?? "").split(/\s+/));

    ["table", "header", "header-cell", "body", "row", "cell"].forEach(
      (part) => expect(parts).toContain(part),
    );

    element.rows = [];
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('[part~="empty"]'),
    ).not.toBeNull();

    element.loading = true;
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('[part~="loading"]'),
    ).not.toBeNull();
  });

  it("marks the table busy only while loading", async () => {
    const element = await mountTable((table) => {
      table.columns = columns;
      table.rows = rows;
    });

    expect(
      element.shadowRoot?.querySelector("table")?.hasAttribute("aria-busy"),
    ).toBe(false);
  });
});
