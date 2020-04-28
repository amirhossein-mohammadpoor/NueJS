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

NueJS.makeLink({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
});

NueJS.makeLink({
    rel: "stylesheet",
    href: "style.css"
});