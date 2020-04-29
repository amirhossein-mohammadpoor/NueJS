let element;
const elements = [];
const root = document.getElementById("root");

element =
    NueJS.createElement("div", { classname: "right" },
        NueJS.createElement("div", { classname: "sign-up" },
            NueJS.createElement("a", { href: "#" }, "ورود"),
            NueJS.createElement("h4", {}, "ورود به حساب کاربری"),
            NueJS.createElement("span", {}, "جهت ورود به برنامه نام کاربری و رمز عبور خود را وارد نمایید"),
            NueJS.createElement("form", {},
                NueJS.createElement("div", { classname: "email" },
                    NueJS.createElement("input", { type: "text", placeholder: "نام کاربری" }),
                    NueJS.createElement("i", { classname: "fa fa-user" })
                ),
                NueJS.createElement("div", { classname: "password" },
                    NueJS.createElement("input", { type: "text", placeholder: "نام کاربری" }),
                    NueJS.createElement("i", { classname: "fa fa-user" })
                ),
                NueJS.createElement("div", { classname: "security-password" },
                    NueJS.createElement("div", { classname: "pass" },
                        NueJS.createElement("input", { type:"text", placeholder:"کد امنیتی" }),
                        NueJS.createElement("i", { classname: "fa fa-th" })
                    ),
                    NueJS.createElement("div",{ classname: "code" },
                        NueJS.createElement("div", {}, "93xz5"),
                        NueJS.createElement("i", { classname: "fa fa-refresh" })
                    )
                ),
                NueJS.createElement("button", { type: "submit" }, "ورود"),
                NueJS.createElement("div", { classname: "remember-me" },
                    NueJS.createElement("label", { for: "remember-me"  }, "مرا به خاطر بسپار"),
                    NueJS.createElement("input", { type: "checkbox", name: "remember-me", placeholder: "نام کاربری" }),
                ),
            )
        )
    );

elements.push(element);

element =
    NueJS.createElement("left", { classname: "left" },
        NueJS.createElement("div", { classname: "circle1" }),
        NueJS.createElement("div", { classname: "circle2" }),
        NueJS.createElement("div", { classname: "circle3" }),
        NueJS.createElement("img", { src: "./Assets/PNG/Logo.png", classname:"logo" }),
        NueJS.createElement("img", { src: "./Assets/PNG/radar-angle.png", classname:"radar-angle"}),
        NueJS.createElement("span", {}, "Multi Anti-Viruse & Cybersecurity")
    );

elements.push(element);

NueJS.render(root, elements)

NueJS.makeLink({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
});

NueJS.makeLink({
    rel: "stylesheet",
    href: "index.css"
});

