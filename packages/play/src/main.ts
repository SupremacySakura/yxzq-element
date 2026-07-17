import "yxzq-element";
import "./style.css";

const button = document.querySelector("super-button");
const input = document.querySelector("super-input");
const checkbox = document.querySelector("super-checkbox");
const radios = document.querySelectorAll("super-radio");
const switchElement = document.querySelector("super-switch");
const select = document.querySelector("super-select");

const writeOutput = (message: string): void => {
  const output = document.querySelector("output");
  if (output) {
    output.textContent = message;
  }
};

button?.addEventListener("click", () => {
  writeOutput("super-button click 事件正常工作");
});

input?.addEventListener("super-input", (event) => {
  writeOutput(`super-input 当前值：${event.detail.value}`);
});

checkbox?.addEventListener("super-checkbox-change", (event) => {
  writeOutput(`super-checkbox：${event.detail.checked ? "已选择" : "未选择"}`);
});

radios.forEach((radio) => {
  radio.addEventListener("super-radio-change", (event) => {
    writeOutput(`super-radio 当前值：${event.detail.value}`);
  });
});

switchElement?.addEventListener("super-switch-change", (event) => {
  writeOutput(`super-switch：${event.detail.checked ? "开启" : "关闭"}`);
});

select?.addEventListener("super-select-change", (event) => {
  writeOutput(`super-select 当前值：${event.detail.values.join("、") || "未选择"}`);
});
