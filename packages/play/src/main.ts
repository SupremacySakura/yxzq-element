import "yxzq-element";
import "./style.css";

const button = document.querySelector("super-button");

button?.addEventListener("click", () => {
  const output = document.querySelector("output");
  if (output) {
    output.textContent = "super-button click 事件正常工作";
  }
});
