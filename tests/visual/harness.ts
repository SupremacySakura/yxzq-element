import "yxzq-element";

const params = new URLSearchParams(window.location.search);
const markup = params.get("markup") ?? "";
const stage = document.querySelector<HTMLDivElement>("#stage");

if (stage) {
  stage.innerHTML = markup;
}
