function byId(str) {
    return document.getElementById(str)
}

function byClass(str) {
    return document.getElementsByClassName(str)
}

function byTag(str) {
    return document.getElementsByTagName(str)
}

function getTheme() {
    return localStorage.getItem("theme") ?? "dark"
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme)
}

export {
    byId,
    byClass,
    byTag,
    getTheme,
    setTheme
}
