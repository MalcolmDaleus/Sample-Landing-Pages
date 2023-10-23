"use strict";

const subscriptionBox = document.querySelectorAll(".subscription-section");

subscriptionBox.forEach(function (element) {
	element.addEventListener("click", addHoverClass);
});
function addHoverClass(event) {
	subscriptionBox.forEach(function (element) {
		element.classList.remove("active");
		element.children[5].classList.remove("active");
	});

	event.currentTarget.classList.add("active");
	event.currentTarget.children[5].classList.add("active");
}
