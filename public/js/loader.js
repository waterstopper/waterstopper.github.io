import { byId } from "./util.js";


function _set_theme() {
    let theme = localStorage.getItem("theme") ?? "dark"
    console.log(theme)
    console.log(`set themae ${theme}`)
    document.documentElement.setAttribute('data-theme', theme);
}

_set_theme()

byId("change-theme-button").onclick = () => {
    console.log("a")
    let theme = document.documentElement.getAttribute('data-theme') ?? "light";
    let new_theme = theme == "light" ? "dark" : "light";

    theme_button.innerText = new_theme;
    localStorage.setItem(stored.theme, new_theme);
    _set_theme();
}
