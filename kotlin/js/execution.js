import {
    addBreakpoint,
    changeBreakpointColor,
    startDebugging,
    addConsoleOutput,
    clearDebug,
} from './debug.js';
import {showWarning, clearConsole} from './index.js';
import {createFileFromPath, setFileContent} from './filetree.js';
import {openTab, switchTab} from './tab.js';
let worker;

function addBreakpointsToCode(code, breakpoints) {
    code = code.split('\n');
    breakpoints.sort(
        (a, b) =>
            parseInt(a.range.startLineNumber) -
            parseInt(b.range.startLineNumber),
    );
    breakpoints.forEach((point) => {
        code[point.range.startLineNumber - 1] =
            '#stop; ' + code[point.range.startLineNumber - 1];
    });
    return code.join('\n');
}

async function startExecution(withDebug) {
    window.startTime = new Date().getTime();
    window.consoleEntries = 0;
    clearDebug();
    clearConsole();
    if (window.currentTab == null) {
        showWarning('unpicked-delete', 2000);
        return;
    } else if (
        !window.currentTab.path.includes('.') ||
        window.currentTab.path.split('.').reverse()[0] != 'rgn'
    ) {
        showWarning('unsupported-format', 2000);
        return;
    }
    if (withDebug) changeBreakpointColor();
    // allow only one instance running
    if (worker != null) return;
    window.editor.removeException();
    require(['vs/editor/editor.main'], function() {
        monaco.editor.setModelMarkers(window.editor.getModel(), 'owner', []);
    });
    const button = document
        .getElementById(withDebug ? 'debug-button' : 'start-button')
        .getElementsByTagName('i')[0];
    button.style['-webkit-text-fill-color'] = 'var(--gray)';
    const path = localStorage.getItem('main-file');
    console.log(path);
    const tab = path == '' ? window.currentTab : window.tabs[path];
    if (tab == null) {
        showWarning('unopened-main-file', 2000, path.toString());
        button.style['-webkit-text-fill-color'] = 'var(--green)';
    } else {
        worker = new Worker('../../kotlin/js/external/regina_interpreter.js');
        worker.onmessage = (e) => {
            handleWorkerMessage(e, withDebug, button, tab);
        };
    }
}
localStorage.removeItem('std/geometry2D.rgn');
async function handleWorkerMessage(e, withDebug, button, tab) {
    switch (e.data.type) {
    case 'ready':
        worker.postMessage({
            data: 'start',
            content: {
                path: tab.path,
                content: addBreakpointsToCode(
                    tab.model.getValue(),
                    tab.bList,
                ),
            },
        });
        break;
    case 'import':
        const code = await window.getFileContentByPath(e.data.content);
        worker.postMessage({
            data: 'write',
            content: {
                path: e.data.content,
                content: code,
            },
        });
        break;
    case 'write':
        createFileFromPath(e.data.content.first_1, true);
        setFileContent(e.data.content.first_1, e.data.content.second_1);
        break;
    case 'finished':
        showLog(
            `finished in ${new Date().getTime() - window.startTime} ms`, true,
        );
        resetExecution(button);
        if (withDebug) return startDebugging();
        break;
    case 'log':
        if (++window.consoleEntries >= window.maxConsoleEntries + 1) {
            if (window.consoleEntries == window.maxConsoleEntries + 1) {
                showLog('console overflow', true);
            }
        } else {
            if (withDebug) addConsoleOutput(e.data.content);
            else showLog(e.data.content);
        }
        break;
    case 'exception':
        console.log(e.data.content);
        showLog('exception thrown', true);
        if (e.data.content.path == 'Global') {
            e.data.content.path = localStorage.getItem('main-file');
            e.data.content.message += ' (Global file)';
        }
        const breakpointTab = window.tabs[e.data.content.path];
        if (breakpointTab != null && breakpointTab != window.currentTab) {
            switchTab(breakpointTab);
        }
        if (breakpointTab == null) {
            openTab(
                e.data.content.path,
                localStorage.getItem(e.data.content.path) == null,
            );
        }
        showException(e.data.content, window.tabs[e.data.content.path]);
        resetExecution(button);
        if (withDebug) return startDebugging();
        break;
    case 'debug':
        addBreakpoint(e.data.content);
        break;
    case 'breakpoint':
        changeBreakpointColor(parseInt(e.data.content.second_1) + 1);
        break;
    }
}

function resetExecution(button) {
    worker = null;
    button.style['-webkit-text-fill-color'] = 'var(--green)';
}

function showLog(content, isTime = false) {
    const output = document
        .getElementsByClassName('console-record')[0]
        .cloneNode(true);
    output.style = 'display:block;';
    output.getElementsByTagName('p')[0].innerText = content;
    if (isTime) {
        output.getElementsByTagName('p')[0].style = 'color:gray;font-style:italic;font-size:smaller';
    }
    document.getElementById('console').appendChild(output);
}

function terminateExecution() {
    if (worker != null) {
        worker.terminate();
        document
            .getElementById('start-button')
            .getElementsByTagName('i')[0].style['-webkit-text-fill-color'] =
            'var(--green)';
        document
            .getElementById('debug-button')
            .getElementsByTagName('i')[0].style['-webkit-text-fill-color'] =
            'var(--green)';
        worker = null;
    }
}

function showException(exception, tab) {
    require(['vs/editor/editor.main'], function() {
        monaco.editor.setModelMarkers(window.editor.getModel(), 'owner', [
            {
                message: exception.message,
                severity: monaco.MarkerSeverity.Error,
                startLineNumber: exception.position.y,
                startColumn: exception.position.x,
                endLineNumber: exception.position.y,
                endColumn: exception.position.x + exception.length,
            },
        ]);
        console.log(tab);
        window.editor.removeException = () =>
            monaco.editor.setModelMarkers(tab.model, 'owner', []);
    });
    window.editor.revealLine(exception.position.y);
}

export {startExecution, showLog, addBreakpointsToCode, terminateExecution};
