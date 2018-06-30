var link = document.querySelector(".button.search");
var form = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("form-show");
 });