var link = document.querySelector(".buy-btn");
var cartPopup = document.querySelector(".addcart-popup");
var cartCloseCross = cartPopup.querySelector(".popup-close");
var cartCloseLink = cartPopup.querySelector(".continue-btn");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartCloseCross.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartCloseLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});