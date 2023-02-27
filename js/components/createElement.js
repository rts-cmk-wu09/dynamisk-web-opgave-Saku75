export default function createElement(tag, parent, callback) {
	const element = document.createElement(tag);
	parent.appendChild(element);
	if (callback) callback(element);
	return element;
}
