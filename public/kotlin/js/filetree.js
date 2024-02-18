import {openTab} from './tab.js';
import {showWarning} from './index.js';

function getPath(fileElement) {
    const res = [];
    let parent = fileElement.parentElement;
    const filetree = document.getElementById('file-tree');
    while (parent != filetree && parent != filetree.parentElement) {
        res.push(parent.getElementsByTagName('span')[0].innerText);
        parent = parent.parentElement.parentElement;
    }
    return res.reverse().join('/');
}

function createTree() {
    deleteLibFiles();
    const fileSystem = JSON.parse(localStorage.getItem('layout'));
    console.log(fileSystem);
    fetch('https://llesha.github.io/reginafiles/layout.json')
        .then(function(response) {
            return response.text();
        })
        .then((text) => JSON.parse(text))
        .then((layout) => {
            if (fileSystem.resources == null) {
                fileSystem.resources = {isLib: false, content: {}};
                localStorage.setItem('layout', JSON.stringify(fileSystem));
            }
            if (fileSystem['main.rgn'] == null) {
                fileSystem['main.rgn'] = '1';
                setFileContent(
                    'main.rgn',
                    `fun main() {\\n\\tprint(\\"Hello, World!\\") \\n}`,
                );
                localStorage.setItem('layout', JSON.stringify(fileSystem));
            }

            addFolderBeforeLoad(
                document.getElementById('file-tree'),
                fileSystem,
                fileSystem,
                false,
            );
            addFolderBeforeLoad(
                document.getElementById('file-tree'),
                layout,
                fileSystem,
                true,
            );
            openTab('main.rgn', false);
        })
        .catch((e) => {
            console.log('Could not load', e);
        });
}

function deleteLibFiles() {
    const root = JSON.parse(localStorage.getItem('layout'));
    for (const [name, entry] of Object.entries(root)) {
        if (entry == 'lib') delete root[name];
        else if (typeof entry == 'object') {
            if (entry.isLib == 'true') delete root[name];
        }
    }
    localStorage.setItem('layout', JSON.stringify(root));
}

function addFolderBeforeLoad(
    currentFolderElement,
    currentFolderLayout,
    fileSystemFolder,
    isLib,
) {
    const fileTree = document.getElementById('file-tree');
    for (const [name, entry] of Object.entries(currentFolderLayout)) {
        if (typeof entry == 'object') {
            const folder = createFolder(
                name,
                currentFolderElement == fileTree ?
                    '' :
                    currentFolderElement.innerText,
                currentFolderElement.parentElement.getElementsByTagName('ul')[0],
            );
            if (isLib) {
                folder.style.color = 'var(--ident-color)';
                folder.setAttribute('lib', 'true');
                if (fileSystemFolder[name] == null) {
                    fileSystemFolder[name] = {isLib: 'true', content: {}};
                }
            }
            addFolderBeforeLoad(
                folder,
                entry.content,
                fileSystemFolder[name].content,
                isLib,
            );
        } else {
            const file = createFile(
                name,
                currentFolderElement == fileTree ?
                    '' :
                    currentFolderElement.innerText,
                currentFolderElement.parentElement.getElementsByTagName('ul')[0],
            );
            if (isLib) {
                file.style.color = 'var(--ident-color)';
                file.setAttribute('lib', 'true');
                fileSystemFolder[name] = 'lib';
            }
        }
    }
}

function createLeaf(parent) {
    const leaf = document.createElement('ul');
    const text = document.createElement('span');
    text.classList.add('file-tree-element');

    parent.appendChild(leaf);
    leaf.appendChild(text);
    return text;
}

function createFile(fileName = 'myFile.rgn', folderName = '', parent) {
    const tree = parent == null ? getTree(folderName) : parent;
    const file = createLeaf(tree);
    tree.appendChild(file.parentElement);
    file.textContent = fileName;
    file.onclick = () => addFocusFunction(file);
    addHoverFunction(file);

    file.ondblclick = () => {
        openTab(file.getAttribute('path'), file.getAttribute('lib'));
    };
    // if (parent != document.getElementById("file-tree"))
    //     file.parentElement.style.marginLeft = "-20px";

    file.parentElement.style.padding = '0px';
    const path = getPath(file);
    file.setAttribute('path', path);
    return file;
}

function createParent(parent) {
    const par = document.createElement('li');
    const caret = document.createElement('span');
    caret.classList.add('caret', 'file-tree-element');
    const ul = document.createElement('ul');
    ul.className = 'nested';

    par.appendChild(caret);
    par.appendChild(ul);
    parent.appendChild(par);

    caret.addEventListener('click', function() {
        this.parentElement.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
    });
    return caret;
}

function createFolder(name = 'myFolder', folderName = '', parent) {
    const tree = parent == null ? getTree(folderName) : parent;
    const folder = createParent(tree);
    folder.innerText = name;
    folder.onclick = () => addFocusFunction(folder);
    // if (parent != document.getElementById("file-tree"))
    //     folder.parentElement.style.marginLeft = "-20px";
    const path = getPath(folder);
    folder.setAttribute('path', path);
    return folder;
}

function getByInnerHtml(collection, searched) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].innerHTML == searched) return collection[i];
    }
}

function getTree(folderName) {
    const parentElement = document.getElementById('file-tree');
    return folderName == '' ?
        parentElement :
        getByInnerHtml(
            parentElement.getElementsByClassName('caret'),
            folderName,
        ).parentNode.getElementsByClassName('nested')[0];
}

function addHoverFunction(element) {
    element.onmouseenter = () => {
        if (element != window.currentFile) {
            element.style.backgroundColor = 'var(--light-gray)';
        }
    };
    element.onmouseleave = () => {
        if (element != window.currentFile) {
            toDefaultStyle(element);
        }
    };
}

function addFocusFunction(element) {
    if (window.currentFile != null) toDefaultStyle(window.currentFile);
    window.currentFile = element;
    element.style.backgroundColor = 'var(--middle-color)';
    element.style.color = 'var(--bg-color)';
}

function toDefaultStyle(element) {
    element.style.backgroundColor = 'var(--bg-color)';
    element.style.color =
        element.getAttribute('lib') != null ?
            'var(--ident-color)' :
            'var(--main-color)';
}

function addTreeElement(
    parent = document.getElementById('file-tree'),
    isFolder,
    folderName = '',
) {
    const divInput = document.createElement('div');
    // if (parent != document.getElementById("file-tree"))
    //     divInput.style.marginLeft = "-20px";
    const input = document.createElement('input');
    input.style.borderWidth = '0px';
    input.style.outline = 'none';
    input.style.width = '1px';
    input.style.padding = '0px';
    input.style.fontSize = 'medium';
    divInput.appendChild(input);

    if (!isFolder) {
        const format = document.createElement('span');
        format.innerText = '.rgn';
        divInput.appendChild(format);
    }
    parent.appendChild(divInput);

    input.oninput = () => {
        input.style.width = input.value.length + 'ch';
    };
    function removeInputElement() {
        const name = fixFileName(input.value) + (isFolder ? '' : '.rgn');
        const element = isFolder ?
            createFolder(name, folderName, parent) :
            createFile(name, folderName, parent);
        divInput.insertAdjacentElement('afterend', element.parentElement);
        divInput.remove();

        let path = element.getAttribute('path');
        element.innerText = addFileToLayout(path.split('/'));
        element.setAttribute(
            'path',
            path.substring(0, path.lastIndexOf('/') + 1) + element.innerText,
        );
        path = element.getAttribute('path');
        setFileContent(path);
    }

    let pressed = false;
    function handleEnterPress(e) {
        if (e.key.toLowerCase() != 'enter') return;
        if (pressed) return;
        pressed = true;
        removeInputElement();
    }
    input.onblur = () => {
        if (pressed) return;
        removeInputElement();
    };
    addEventListener('keydown', handleEnterPress);
    input.focus();
}

function setFileContent(path, code = '') {
    localStorage.setItem(
        path,
        `{"state":{
            "cursorState":[{"inSelectionMode":false,"selectionStart":
            {"lineNumber":1,"column":15},"position":{"lineNumber":1,"column":15}}],
            "viewState":{"scrollLeft":0,"firstPosition":{"lineNumber":1,"column":1},
            "firstPositionDeltaTop":0},"contributionsState":
            {"editor.contrib.wordHighlighter":false,"editor.contrib.folding":
            {"lineCount":1,"provider":"indent","foldedImports":false}}},
            "path":"${path}",
            "isLib":null,
            "bList":[],
        "code":"${code}"}`,
    );
    if (path == 'result.svg') {
        document.getElementById('svg-result').innerHTML = code;
    }
}

function addFileToLayout(path, overwrite = false) {
    const fileSystem = JSON.parse(localStorage.getItem('layout'));
    let fileName = path[path.length - 1];
    const folderNames = path.slice(0, -1);
    let currentFolder = fileSystem;
    for (const folderName of folderNames) {
        currentFolder = currentFolder[folderName].content;
    }
    if (overwrite) {
        currentFolder[fileName] = fileName.includes('.') ?
            '1' :
            {isLib: 'false', content: {}};
    } else {
        while (currentFolder[fileName] != null) fileName = nextName(fileName);
        currentFolder[fileName] = fileName.includes('.') ?
            '1' :
            {isLib: 'false', content: {}};
    }
    localStorage.setItem('layout', JSON.stringify(fileSystem));
    return fileName;
}

function deleteFile(path) {
    const fileSystem = JSON.parse(localStorage.getItem('layout'));
    const fileName = path[path.length - 1];
    const folderNames = path.slice(0, -1);
    let currentFolder = fileSystem;
    for (const folderName of folderNames) {
        currentFolder = currentFolder[folderName];
    }
    delete currentFolder[fileName];
    localStorage.setItem('layout', JSON.stringify(fileSystem));
}

function fixFileName(name) {
    const res = name.replace(/[^\w]/gi, '').replace(/^[0-9]+/g, '');
    if (res == '') return 'unnamed';
    return res;
}

function nextName(fileName) {
    const [name, format] = fileName.split('.');
    const res = [];
    for (const char of name.split('').reverse().join('')) {
        if (char >= '0' && char <= '9') res.push(char);
        else break;
    }
    const length = res.length;
    if (length == 0) return name + (format == null ? '1' : '1.' + format);
    const nextNumber = parseInt(res.reverse().join('')) + 1;
    return (
        name.substring(0, name.length - length) +
        nextNumber +
        (format == null ? '' : '.' + format)
    );
}

function getFolderUlByName(parent, name) {
    console.log(parent, name);
    for (const element of parent.getElementsByTagName('li')) {
        const span = element.getElementsByTagName('span')[0];
        if (span.innerText == name) {
            if (span.getAttribute('lib') != null) {
                return null;
            }
            return element.getElementsByTagName('ul')[0];
        }
    }
}

function createFileFromPath(path, overwrite = false) {
    let folders = path.split('/');
    folders = folders.slice(0, folders.length - 1);
    let parent = document.getElementById('file-tree');
    let folderName = '';
    for (folderName of folders) {
        parent = getFolderUlByName(parent, folderName);
        if (parent == null) {
            showWarning('add-library-folders', 1500, ': ' + path);
            return;
        }
    }
    const newName = addFileToLayout(path.split('/'), overwrite);
    if (!overwrite) {
        createFile(newName, folderName, parent);
    }
}

export {
    createLeaf,
    createParent,
    addTreeElement,
    deleteFile,
    createFileFromPath,
    setFileContent,
    createTree,
};
