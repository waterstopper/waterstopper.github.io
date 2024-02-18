
function _set_theme() {
    let theme = localStorage.getItem("theme") ?? "light"
    document.documentElement.setAttribute('data-theme', theme);
}

_set_theme()
