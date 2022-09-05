/* settings:
    1. panel sizes
    2. theme
    3. autosave, seconds
    4. console entries, number

    files
    file tree files and their contents
*/

function autosave() {
    localStorage.setItem("code", window.editor.getValue());
}

var counter = 0;
setInterval(function () {
    autosave();
}, 3000);

var holdingReset = false;
var interval = null;

document.getElementById("reset-all").onmousedown = () => {
    let index = 3;
    document.getElementById("reset-all").innerText = "hold " + index + "...";
    index--;
    interval = setInterval(function () {
        if (index == 0) {
            clearInterval(interval);
            document.getElementById("reset-all").innerText = "succesful!";
            localStorage.clear()
            location.reload()
            setDefaults()
        } else document.getElementById("reset-all").innerText = "hold " + index + "...";
        index--;
    }, 1000);
};

function stopReset() {
    clearInterval(interval);
    document.getElementById("reset-all").innerText = "do reset";
}

document.getElementById("reset-all").onmouseup = () => stopReset();
document.getElementById("reset-all").onmouseleave = () => stopReset();
document.getElementById("save-button").onclick = () => autosave();

document.getElementById("theme-button").onclick = () => {
    if (document.documentElement.getAttribute("data-theme") == "dark")
        changeTheme("light");
    else changeTheme("dark");
};

document.getElementById("console-entries").onchange = (e) =>
    changeNumberInput(e.target, "consoleEntries", [0, 200]);

document.getElementById("font-size").onchange = (e) => {
    changeNumberInput(e.target, "fontSize", [5, 100]);
    updateFontSize();
};

function updateFontSize() {
    require(["vs/editor/editor.main"], function () {
        window.editor.updateOptions({
            fontSize: localStorage.getItem("fontSize"),
        });
    });
}

function changeNumberInput(target, storageName, bounds) {
    let value = target.value;
    if (value < bounds[0]) value = bounds[0];
    else if (value > bounds[1]) value = bounds[1];
    target.value = value;
    localStorage.setItem(storageName, parseInt(value));
}

function setDefaults() {
    if (localStorage.getItem("firstTime") != null) return;
    localStorage.setItem("firstTime", false);
    localStorage.setItem("theme", "light");
    localStorage.setItem("autosaveSeconds", 3);
    localStorage.setItem("consoleEntries", 100);
    localStorage.setItem("fontSize", 14);
    localStorage.setItem("settingsSize", 48);
    localStorage.setItem("leftSize", 33);
    localStorage.setItem("rightSize", 33);
    localStorage.setItem("consoleSize", 48);

    localStorage.setItem("autosave", "true")
    localStorage.setItem("layout", "{}")
    localStorage.setItem(
        "main.rgn",
        `
fun main() {
    log("Hello, World!")
    t = a();
    test(t == 1)
}

fun a() {
    thi ;
    = 1
    return thi
}`
    );
}

function openSettings() {
    document.getElementById("console-entries").value =
        localStorage.getItem("consoleEntries");
    document.getElementById("font-size").value =
        localStorage.getItem("fontSize");
    document.getElementById("autosave").checked =
        localStorage.getItem("autosave") == "true";
    updateFontSize();
}

function changeTheme(themeName) {
    require(["vs/editor/editor.main"], function () {
        localStorage.setItem("theme", themeName);
        monaco.editor.setTheme("regina-" + themeName);
        document.documentElement.setAttribute("data-theme", themeName);
        document.getElementById("theme-button").innerText = themeName;
    });
}

setDefaults();
changeTheme(localStorage.getItem("theme"));
openSettings();
