window.addEventListener("click", function (event) {
  let counter;
  const eventPlus = event.target.dataset.action === "plus";
  const eventMinus = event.target.dataset.action === "minus";

  if (eventPlus || eventMinus) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (eventPlus) {
    ++counter.innerText;
  }

  if (eventMinus) {
    if (parseInt(counter.innerText) > 1) {
      --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      console.log("Cart Item");
      event.target.closest(".cart-item").remove();
    }
  }
});

// const minusBtn = document.querySelector('[data-action="minus"]');
// const plusBtn = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector("[data-counter]");

// console.log(minusBtn, plusBtn, parseInt(counter.innerText));

// minusBtn.addEventListener("click", function () {
//   console.log("minus");
//   if (parseInt(counter.innerText) > 1) {
//     --counter.innerText;
//   }
// });

// plusBtn.addEventListener("click", function () {
//   console.log("plus");
//   ++counter.innerText;
// });
