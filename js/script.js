var link = document.querySelector(".button.search");
var form = document.querySelector(".search-form");
var entery = form.querySelector("[name=date-entry]")

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("form-show");
	entery.focus();
 });
