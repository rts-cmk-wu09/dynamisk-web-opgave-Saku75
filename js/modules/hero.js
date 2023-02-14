import createElement from "../components/createElement.js";

export default function main(data) {
	const hero = document.querySelector(".hero");

	createElement("link", document.head, (stylesheet) => {
		stylesheet.rel = "stylesheet";
		stylesheet.href = "/css/modules/hero.css";
	});

	createElement("nav", hero, (navbar) => {
		createElement("a", navbar, (logoLink) => {
			createElement("img", logoLink).src = "/img/logo.svg";
		}).href = "/";
		createElement("button", navbar, (button) => {
			createElement("img", button).src = "/img/arrowDown.svg";
			createElement("img", button).src = "/img/profile.svg";
		});
	});

	createElement("img", hero, (image) => {
		image.src = data.image;
	});

	createElement("div", hero, (box) => {
		createElement("h1", box).innerHTML = data.headline.replace(
			"save your time",
			"<span>save your time</span>"
		);
		createElement("p", box).innerText = data.copy;
		createElement("button", box, (button) => {
			createElement("img", button).src = data.icon;
			button.innerHTML += "Explore";
		});
	});
}
