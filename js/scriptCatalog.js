var productLink = document.querySelector(".buy");
var productPopup = document.querySelector(".modal-product");
var productClose = productPopup.querySelector(".modal-close");

productLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	productPopup.classList.add("modal-show");
});

productClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	productPopup.classList.remove("modal-show");
});
