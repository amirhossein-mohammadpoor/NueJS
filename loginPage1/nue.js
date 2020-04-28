const NueJS = {};
const root = document.getElementById("root");

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

let element = 
    NueJS.createElement("div", { classname: "login" },
        NueJS.createElement("h1", {}, "گنچه"),
        NueJS.createElement("h2", {}, "ورود به حساب کاربری"),
        NueJS.createElement("div", { className: "inputs" },
            NueJS.createElement("i", { className: "fa fa-user" }),
            NueJS.createElement("i", { className: "fa fa-lock" }),
            NueJS.createElement("input", { type: "text", placeholder: "نام کاربری" }),
            NueJS.createElement("input", { type: "password", placeholder: "رمز عبور" })),
        NueJS.createElement("button", {}, "ورود"),
        NueJS.createElement("div", { style: { float: "right" } }, "مرا به خاطر بسپار !"),
        NueJS.createElement("input", { type: "checkbox" }),
        NueJS.createElement("a", { style: { float: "left" } , href: "#" }, "رمز عبور را فراموش کردم")
    );

root.append(element);