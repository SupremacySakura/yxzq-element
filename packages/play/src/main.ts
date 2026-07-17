import "yxzq-element";
import "./style.css";

const button = document.querySelector("super-button");
const input = document.querySelector("super-input");

button?.addEventListener("click", () => {
  const output = document.querySelector("output");
  if (output) {
    output.textContent = "super-button click 事件正常工作";
  }
});

input?.addEventListener("super-input", (event) => {
  const output = document.querySelector("output");
  if (output) {
    output.textContent = `super-input 当前值：${event.detail.value}`;
  }
});
