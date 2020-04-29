const NueJS = {};

NueJS.createTextNode = function (text) {
    return document.createTextNode(text);
}

NueJS.createElement = function (type, props, ...children) {
    const element = document.createElement(type);
    for (let key in props) {
        if (key === "classname") {
            element.className = props[key];
        } else if (key === "style") {
            Object.assign(element.style, props[key])
        } else {
            element.setAttribute(key, props[key]);
        }
    }
    for (let child of children) {
        element.append((typeof child === "string") ? this.createTextNode(child) : child);
    }
    return element;
}

NueJS.makeLink = function (data) {
    document.head.append(this.createElement("link", data));
}

NueJS.render = function (id, elements) {
	for (let value of elements) {
		id.append(value)
	}
}
