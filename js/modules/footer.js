import createElement from "../components/createElement.js";

export default function main(data) {
	const footer = createElement("section", document.body, (footer) => {
		footer.classList.add("footer");
	});

	createElement("link", document.head, (stylesheet) => {
		stylesheet.rel = "stylesheet";
		stylesheet.href = "/css/modules/footer.css";
	});

	createElement("div", footer, (top) => {
		createElement("div", top, (text) => {
			createElement("h2", text).innerText = data.name;
			createElement("p", text).innerText = data.slogan;
		});

		data.lists.forEach((listData) => {
			createElement("section", top, (container) => {
				createElement("h3", container).innerText = listData.headline;
				createElement("ul", container, (list) => {
					listData.links.forEach((item) => {
						createElement("li", list, (li) => {
							createElement("a", li, (link) => {
								link.innerText = item;
								link.href = "#";
							});
						});
					});
				});
			});
		});
	});

	createElement("div", footer, (bottom) => {
		createElement("p", bottom).innerText = data.copyright;
		createElement("ul", bottom, (list) => {
			data.extraLinks.forEach((item) => {
				createElement("li", list, (li) => {
					createElement("a", li, (link) => {
						link.innerText = item;
						link.href = "#";
					});
				});
			});
		});
	});
}
