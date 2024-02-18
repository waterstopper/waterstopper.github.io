function byId(str) {
    return document.getElementById(str)
}

function byClass(str) {
    return document.getElementsByClassName(str)
}

function byTag(str) {
    return document.getElementsByTagName(str)
}


function change_display(element) {
    if (element.style.display == "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

function random_string(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function get_theme() {
    let theme = localStorage.getItem(stored.theme)
    return theme == null ? "light" : theme;
}

export {
    byId,
    byClass,
    byTag,
    random_string,
    change_display,
    get_theme
}
