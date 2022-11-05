import {addBreakpointsToCode} from './execution.js';

/**
 * name: name to display in tab
 * htmlElement: tab DOM element
 * state: editor breakpoints, caret position
 * model: editor undo/redo stack, code (non-null if DOM tab exists)
 * code: code (non-null if tab is closed and tab is for user file). Is needed not to reset undo/redo
 * and store plain text.
 * isLib: if file is library file
 */

class Tab {
    constructor(path) {
        this.createHTMLElement(path);
    }
    state = null;
    model = null;
    htmlElement = null;
    createHTMLElement(path) {
        const tabs = document.getElementsByClassName('tabs scrollable')[0];
        this.htmlElement = tabs
            .getElementsByClassName('tab')[0]
            .cloneNode(true);
        const pathElements = path.split('/');
        this.htmlElement.getElementsByTagName('p')[0].innerText =
            pathElements[pathElements.length - 1];
        tabs.appendChild(this.htmlElement);
        this.htmlElement.getElementsByClassName('close')[0].onclick = (e) => {
            this.htmlElement.remove();
            closeTab(this);
            e.stopPropagation();
        };
        this.htmlElement.onclick = () => switchTab(this);
        this.htmlElement.setAttribute('path', path);
        this.htmlElement.style.display = 'flex';
        this.setHover();
    }

    setActive() {
        this.htmlElement.style.backgroundColor = 'var(--bg-color)';
        this.htmlElement.getElementsByClassName(
            'close',
        )[0].style.backgroundColor = 'var(--bg-color)';
    }

    setPassive() {
        this.state = window.editor.saveViewState();
        this.htmlElement.style.backgroundColor = 'var(--light-gray)';
        this.htmlElement.getElementsByClassName(
            'close',
        )[0].style.backgroundColor = 'var(--light-gray)';
    }

    setHover() {
        this.htmlElement.onmouseleave = () => {
            if (this == window.currentTab) return;
            this.htmlElement.style.backgroundColor = 'var(--light-gray)';
            this.htmlElement.getElementsByClassName(
                'close',
            )[0].style.backgroundColor = 'var(--light-gray)';
        };

        this.htmlElement.onmouseover = () => {
            if (this == window.currentTab) return;
            this.htmlElement.style.backgroundColor = 'var(--bg-color)';
            this.htmlElement.getElementsByClassName(
                'close',
            )[0].style.backgroundColor = 'var(--bg-color)';
        };
        this.htmlElement.getElementsByClassName('close')[0].onmouseover = (
            e,
        ) => {
            this.htmlElement.getElementsByClassName(
                'close',
            )[0].style.backgroundColor = 'var(--light-gray)';
            e.stopPropagation();
        };
        this.htmlElement.getElementsByClassName('close')[0].onmouseleave =
            () => {
                this.htmlElement.getElementsByClassName(
                    'close',
                )[0].style.backgroundColor = 'var(--bg-color)';
            };
    }
}

console.log(JSON.parse(localStorage.getItem('flower.rgn')));

window.getFileContentByPath = async function(path) {
    // check if currently opened - in that case breakpoints are important
    if (window.tabs[path] != null) {
        return addBreakpointsToCode(
            window.tabs[path].model.getValue(),
            window.tabs[path].bList,
        );
    }
    let isLocal = localStorage.getItem(path);
    if (isLocal == null) {
        const res = (
            await (
                await fetch('https://llesha.github.io/reginafiles/' + path)
            ).text()
        ).toString();
        if (
            res.includes(
                'Hey! You look a little lost. This page doesn\'t exist (or may be private)',
            )
        ) {
            return null;
        } else return res;
    }
    isLocal = JSON.parse(isLocal);
    return isLocal.code == null ? isLocal.model.getValue() : isLocal.code;
};

function getLayout(folderName, root = '', layout = {}, fileSystem) {
    const res = {};
    if (fileSystem == null) {
        fileSystem = JSON.parse(localStorage.getItem('layout'));
    }
    const current = fileSystem[folderName];
    const currentPath = '';
    for (const [name, value] in Object.entries(current.content)) {
        res[name] =
            typeof value == 'object' ?
                getLayout(name, currentPath) :
                window.getFileContentByPath(currentPath + '/' + name);
    }
}

async function openTab(path, isLib) {
    const found = window.tabs[path];
    if (found != null) {
        switchTab(found);
        return;
    }
    const tab = new Tab(path, isLib);
    let code;
    if (isLib) {
        code = (
            await (
                await fetch('https://llesha.github.io/reginafiles/' + path)
            ).text()
        ).toString();
    } else {
        const saved = JSON.parse(localStorage.getItem(path));
        if (saved != null) {
            code = saved.code;
            tab.state = saved.state;
            tab.bList = saved.bList;
        } else {
            code = '';
        }
    }

    window.tabs[path] = tab;
    tab.path = path;
    tab.isLib = isLib;

    require(['vs/editor/editor.main'], function() {
        tab.model = monaco.editor.createModel(code, 'Regina');
        if (tab.state != null) window.editor.restoreViewState(tab.state);
        if (tab.bList == null) tab.bList = [];
        switchTab(tab);
    });
}

function switchTab(tab) {
    if (window.currentTab != null) window.currentTab.setPassive();
    window.currentTab = tab;
    tab.setActive();
    window.editor.setModel(tab.model);
    window.editor.restoreViewState(tab.state);
    window.editor.updateOptions({
        codeLens: tab.isLib == 'true',
    });
    window.editor.focus();
    window.editor.setBreakpoints(tab.bList);
}

function closeTab(tab) {
    delete window.tabs[tab.path];
    tab.state = window.editor.saveViewState();
    if (tab == window.currentTab) {
        const openedTabs = Object.entries(window.tabs);
        if (openedTabs.length != 0) switchTab(openedTabs[0][1]);
        else {
            window.editor.setModel(null);
            window.currentTab = null;
        }
    }
    if (tab.isLib) return;

    tab.code = tab.model.getValue();
    removeOutOfLineBreakpoints(tab);

    delete tab.model;
    delete tab.htmlElement;
    removeLineSelection(tab);
    localStorage.setItem(tab.path, JSON.stringify(tab));
}

function removeLineSelection(tab) {
    for (const point of tab.bList) {
        point.options.className = '';
    }
}

function removeOutOfLineBreakpoints(tab) {
    const numberOfLines = tab.code.split('\n').length;
    tab.bList = tab.bList.filter((element) => {
        element.range.startLineNumber <= numberOfLines;
    });
}

export default {};
export {openTab, switchTab, closeTab};
