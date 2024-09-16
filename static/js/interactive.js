let theme_button = document.getElementById("change-theme-button");

function _set_theme() {
    let theme = localStorage.getItem("theme") ?? "light"
    document.documentElement.setAttribute('data-theme', theme);
    theme_button.innerText = theme
}

theme_button.onclick = () => {
    let theme = document.documentElement.getAttribute('data-theme') ?? "light";
    let new_theme = theme == "light" ? "dark" : "light";

    localStorage.setItem("theme", new_theme);
    _set_theme();
}

let theme = localStorage.getItem("theme") ?? "light"
theme_button.innerText = theme