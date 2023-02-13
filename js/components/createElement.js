export default function createElement(tag, parent, className) {
	const element = document.createElement(tag);
	if (className) element.classList.add(className);
	parent.appendChild(element);
	return element;
}
