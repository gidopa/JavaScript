let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("click");
});

function focusEvent() {
  console.log("focus on");
}
let input = document.querySelector("input");
input.addEventListener("focus", focusEvent);

input.addEventListener("blur", () => {
  console.log("focus out");
});
