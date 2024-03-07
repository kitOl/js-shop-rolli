// calcCartPrice();
const deliveryFreeLimit = 600;
let deliveryCost = 250;

function calcCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item");

  const totalPriceEl = document.querySelector(".total-price");
  const cartTotalEl = document.querySelector(".cart-total");
  const deliveryCostEl = document.querySelector(".delivery-cost");
  const cartDeliveryEl = document.querySelector("[data-cart-delivery]");
  const totalOrderPriceEl = document.querySelector(".total-order");

  let totalPrice = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");

    const subtotal = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += subtotal;
  });

  totalPriceEl.innerText = totalPrice;
  totalOrderPriceEl.innerText = totalPrice;

  if (totalPrice > 0) {
    cartDeliveryEl.classList.remove("none");
    cartTotalEl.classList.remove("none");
  } else {
    cartDeliveryEl.classList.add("none");
    cartTotalEl.classList.add("none");
  }

  if (totalPrice >= deliveryFreeLimit) {
    deliveryCostEl.classList.add("free");
    deliveryCostEl.innerText = "бесплатно";
    // totalOrderPriceEl.innerText = totalPrice;
  } else {
    deliveryCostEl.classList.remove("free");
    deliveryCostEl.innerText = deliveryCost;
    totalOrderPriceEl.innerText = totalPrice + deliveryCost;
  }
}
