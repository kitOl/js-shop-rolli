const minusBtn = document.querySelector('[data-action="minus"]');
const plusBtn = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

console.log(minusBtn, plusBtn, parseInt(counter.innerText));

minusBtn.addEventListener("click", function () {
  console.log("minus");
  if (parseInt(counter.innerText) > 1) {
    --counter.innerText;
  }
});

plusBtn.addEventListener("click", function () {
  console.log("plus");
  ++counter.innerText;
});
