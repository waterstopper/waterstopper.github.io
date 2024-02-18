import {startExecution, terminateExecution} from './execution.js';
import {
    nextBreakpoint,
    previousBreakpoint,
    toCaretBreakpoint,
} from './debug.js';
import {addTreeElement, deleteFile} from './filetree.js';
import {closeTab} from './tab.js';

let isKeyPressed = false;
const isShiftPressed = false;
window.addEventListener(
    'keydown',
    (event) => {
        if (event.defaultPrevented || isKeyPressed) {
            return; // Do nothing if the event was already processed
        }
        isKeyPressed = true;
        event.preventDefault();
    },
    true,
);

window.addEventListener(
    'keyup',
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        // console.log(event);
        switch (event.key) {
        case 'F9':
            startExecution(true);
            break;
        default:
            return; // Quit when this doesn't handle the key event.
        }
        event.preventDefault();
    },
    true,
);

window.tabs = {};
window.onbeforeunload = closingCode;
function closingCode() {
    for (const [path, tab] of Object.entries(window.tabs)) closeTab(tab);
    return null;
}
// document.getElementById("autosave").oninput = (e) => {
//     if (e.target.checked) {
//         localStorage.setItem("autosave", true);
//     } else localStorage.setItem("autosave", false);
// };

const fileMenu = document
    .getElementById('file-tree-menu')
    .getElementsByTagName('p');

fileMenu[0].onclick = () => addElement(false);
fileMenu[1].onclick = () => addElement(true);

function addElement(isFolder) {
    if (window.currentFile == null) {
        addTreeElement(document.getElementById('file-tree'), isFolder, '');
        return;
    }
    if (
        window.currentFile.getAttribute('lib') != null &&
        (window.currentFile.parentElement.parentElement !=
            document.getElementById('file-tree') ||
            window.currentFile.parentElement.tagName == 'LI')
    ) {
        showWarning('add-library-folders');
    } else {
        if (window.currentFile.parentElement.tagName == 'LI') {
            const nested =
                window.currentFile.parentElement.getElementsByClassName(
                    'nested',
                )[0];
            nested.classList.add('active');
            addTreeElement(nested, isFolder, window.currentFile.innerText);
        } else {
            addTreeElement(
                window.currentFile.parentElement.parentElement,
                isFolder,
                window.currentFile.innerText,
            );
        }
    }
}

fileMenu[2].onclick = () => {
    if (window.currentFile == null) {
        showWarning('unpicked-delete', 2000);
        return;
    }
    if (window.currentFile.getAttribute('lib') != null) {
        showWarning('delete-library-files');
        return;
    }
    const tab = window.tabs[window.currentFile.getAttribute('path')];
    if (tab != null && window.currentFile.getAttribute('lib') == null);
    delete window.tabs[window.currentFile.getAttribute('path')];
    const path = window.currentFile.getAttribute('path');
    deleteFile(path.split('/'));
    window.currentFile.parentElement.remove();
    window.currentFile = null;
};

let errorTimeoutId = 0;

function showWarning(spanId, time = 1500, additionalText = '') {
    // const span = document.getElementById(spanId);
    // span.innerText += additionalText;
    const descr = document.getElementById('error-description');
    if (descr.style.display != 'block') {
        const descr = document.getElementById('error-description');
        descr.getElementsByTagName('p')[1].innerHTML =
            '<span style=\'margin-left:2em;\'></span>' + errors[spanId];
        descr.style.display = 'block';
        clearTimeout(errorTimeoutId);
        errorTimeoutId = setTimeout(() => {
            //  span.style.display = "none";
            descr.style.display = 'none';
            // span.innerText = span.innerText.substring(
            //     0,
            //     span.innerText.length - additionalText.length
            // );
        }, time);
        // span.style.display = "block";
    }
}

document.getElementById('error-close').onclick = () => {
    clearTimeout(errorTimeoutId);
    document.getElementById('error-description').style.display = 'none';
};

document.getElementById('show-settings').onclick = (e) => {
    document.getElementById('debug-panel').style.display = 'none';
    document.getElementById('settings-panel').style.display = 'block';
    e.stopPropagation();
};

document.getElementById('show-debug').onclick = (e) => {
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('debug-panel').style.display = 'block';
    e.stopPropagation();
};

document.getElementById('show-settings').onmousedown = (e) =>
    e.stopPropagation();
document.getElementById('show-debug').onmousedown = (e) => e.stopPropagation();
document.getElementById('left-panel-button').onclick = (e) =>
    e.stopPropagation();
document.getElementById('clear-console').onmousedown = (e) =>
    e.stopPropagation();
document.getElementById('hide-console').onmousedown = (e) =>
    e.stopPropagation();

const debugArrows = document
    .getElementById('debug-button-panel')
    .getElementsByTagName('button');

debugArrows[0].onclick = () => previousBreakpoint();
debugArrows[1].onclick = () => nextBreakpoint();
debugArrows[2].onclick = () => toCaretBreakpoint();

document.getElementById('start-button').onclick = () => startExecution(false);
document.getElementById('debug-button').onclick = () => startExecution(true);
document.getElementById('terminate-button').onclick = () =>
    terminateExecution();

oncontextmenu = (event) => {
    const fileMenu = document.getElementById('file-tree-menu');
    fileMenu.style.display = 'none';
    if (mouseInTree) {
        event.preventDefault();
        fileMenu.style.left = event.pageX + 'px';
        fileMenu.style.top = event.pageY + 'px';
        fileMenu.style.display = 'block';
    }
};

onclick = () => {
    const fileMenu = document.getElementById('file-tree-menu');
    fileMenu.style.display = 'none';
};

var mouseInTree = false;

const filePanel = document.getElementById('file-panel');
filePanel.onmouseenter = () => (mouseInTree = true);

filePanel.onmouseleave = () => (mouseInTree = false);

function setPanelWidth() {
    document.getElementsByClassName('container-left')[0].style.width = '30%';
    document.getElementsByClassName('container-middle')[0].style.width = '46%';
}

setPanelWidth();

document.getElementById('left-panel-button').onmousedown = (e) =>
    hideLeftPanel(e);

function hideLeftPanel(e) {
    const lPanel = document.getElementsByClassName('container-left')[0];
    const mPanel = document.getElementsByClassName('container-middle')[0];
    if (lPanel.style.display == 'none') {
        lPanel.style.display = 'block';
        lPanel.style.width = 20 + '%';
        mPanel.style.width =
            parseFloat(
                mPanel.style.width.substring(0, mPanel.style.width.length - 1),
            ) -
            20 +
            '%';
    } else {
        lPanel.style.display = 'none';
        const added = parseFloat(
            lPanel.style.width.substring(0, lPanel.style.width.length - 1),
        );
        mPanel.style.width =
            parseFloat(
                mPanel.style.width.substring(0, mPanel.style.width.length - 1),
            ) +
            added +
            '%';
        lPanel.style.width = '0%';
    }
    if (e != null) e.stopPropagation();
}

document.getElementById('clear-console').onclick = () => clearConsole();

function clearConsole() {
    const console = document.getElementById('console');
    const template = console
        .getElementsByClassName('console-record')[0]
        .cloneNode(true);
    console.innerHTML = '';
    console.appendChild(template);
}

document.getElementById('hide-console').onclick = () => {
    const upArrow = document
        .getElementById('hide-console')
        .getElementsByClassName('fa-arrow-up')[0];
    const downArrow = document
        .getElementById('hide-console')
        .getElementsByClassName('fa-arrow-down')[0];
    const consoleOutput = document.getElementById('console');
    if (consoleOutput.style.display == 'none') {
        consoleOutput.style.display = 'block';
        document.getElementById('svg-result').style.height = '48%';
        upArrow.style.display = 'none';
        downArrow.style.display = 'inherit';
        return;
    }
    consoleOutput.style.display = 'none';
    document.getElementById('svg-result').style.height = '98%';
    upArrow.style.display = 'inherit';
    downArrow.style.display = 'none';
};

function hookConsole() {
    if (true) return;
    console.stdlog = console.log;
    console.stderror = console.error;
    console.error = function() {
        console.stdlog.apply(console, arguments);
    };
    console.log = function() {
        const output = document
            .getElementsByClassName('console-record')[0]
            .cloneNode(true);
        output.style = 'display:block;';
        output.getElementsByTagName('p')[0].innerText = Array.from(arguments);
        document.getElementById('console').appendChild(output);
        console.stdlog.apply(console, arguments);
    };
}
// hookConsole();

const descr = document.getElementById('description');
let prevDescribedColor;

function assignToDescribedElements(fn) {
    for (const panel of descriptions) {
        let identifiers;
        let getter;
        if (panel.class != null) {
            getter = '.';
            identifiers = panel.class;
        } else if (Array.isArray(panel.id)) {
            getter = '#';
            identifiers = panel.id;
        }
        const elements = [];
        for (const ident of identifiers) {
            elements.push(
                Array.from(document.querySelectorAll(getter + ident)),
            );
        }
        fn(elements.flat(), panel.title, panel.description);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

assignToDescribedElements(setHoverDescription);

let canDescribe = false;

const mainInput = document.getElementById('main-file');
mainInput.oninput = (e) => {
    mainInput.style.width = Math.max(mainInput.value.length, 6.5) + 'ch';
    localStorage.setItem('main-file', mainInput.value);
};

document.getElementById('help-toggle').oninput = (e) => {
    if (e.target.checked) {
        showDescribable();
        canDescribe = true;
        descr.style.display = 'block';
        descr.getElementsByTagName('p')[0].innerHTML = 'Tip';
        descr.getElementsByTagName('p')[1].innerHTML =
            tips[getRandomInt(0, tips.length)];
    } else {
        canDescribe = false;
        descr.style.display = 'none';
        document.getElementById('bottom-left-panel').style.backgroundColor =
            'var(--bg-color)';
    }
};

function showDescribable() {
    assignToDescribedElements((elements) => {
        const overlay = document.createElement('div');
        document.body.appendChild(overlay);
        overlay.classList.add('overlay');
        const rect = elements[0].getBoundingClientRect();
        overlay.style.width = rect.width + 'px';
        overlay.style.height = rect.height + 'px';
        overlay.style.left = rect.left + 'px';
        overlay.style.top = rect.top + 'px';
        setTimeout(() => {
            overlay.remove();
        }, 1000);
    });
}

function setHoverDescription(elements, title, description) {
    prevDescribedColor = elements[0].style.backgroundColor;
    for (const element of elements) {
        element.onmouseover = () => {
            if (!canDescribe) return;
            descr.getElementsByTagName('p')[0].innerHTML = title;
            descr.getElementsByTagName('p')[1].innerHTML =
                '<span style=\'margin-left:2em;\'></span>' + description;
            for (const e of elements) {
                e.style.backgroundColor = 'rgba(72, 122, 180, .3)';
            } // "rgba(72 122 180 / .2)"
        };
        element.onmouseout = () => {
            if (!canDescribe) return;
            for (const e of elements) {
                e.style.backgroundColor = prevDescribedColor;
            }
        };
    }
}

export {hideLeftPanel, showWarning, clearConsole};
