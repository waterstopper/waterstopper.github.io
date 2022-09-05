import {
    addBreakpoint,
    changeBreakpointColor,
    startDebugging,
    addConsoleOutput,
} from "./debug.js";
import { showWarning } from "./index.js";

var worker;

function addBreakpointsToCode(code, breakpoints) {
    code = code.split("\n");
    breakpoints.sort(
        (a, b) =>
            parseInt(a.range.startLineNumber) -
            parseInt(b.range.startLineNumber)
    );
    breakpoints.forEach((point) => {
        code[point.range.startLineNumber - 1] =
            "#stop; " + code[point.range.startLineNumber - 1];
    });
    return code.join("\n");
}

async function startExecution(withDebug) {
    if (window.currentTab == null) {
        showWarning("unpicked-delete", 2000);
        return;
    } else if (
        !window.currentTab.path.includes(".") ||
        window.currentTab.path.split(".").reverse()[0] != "rgn"
    ) {
        showWarning("unsupported-format", 2000);
        return;
    }
    if (withDebug) changeBreakpointColor();
    // allow only one instance running
    if (worker != null) return;
    require(["vs/editor/editor.main"], function () {
        monaco.editor.setModelMarkers(window.editor.getModel(), "owner", []);
    });
    let button = document
        .getElementById(withDebug ? "debug-button" : "start-button")
        .getElementsByTagName("i")[0];
    button.style["-webkit-text-fill-color"] = "var(--gray)";
    worker = new Worker("../../kotlin/js/external/regina_interpreter.js");
    worker.onmessage = (e) => {
        handleWorkerMessage(e, withDebug, button);
    };
}

async function handleWorkerMessage(e, withDebug, button) {
    switch (e.data.type) {
        case "ready":
            worker.postMessage({
                data: "start",
                content: {
                    path: window.currentTab.path,
                    content: addBreakpointsToCode(
                        window.currentTab.model.getValue(),
                        window.currentTab.bList
                    ),
                },
            }); //worker.postMessage([addBreakpointsToCode(), ""]);
            break;
        case "import":
            console.log(e.data);
            let code = await window.getFileContentByPath(e.data.content);
            worker.postMessage({
                data: "write",
                content: {
                    path: e.data.content,
                    content: code,
                },
            });
            break;
        case "write":
            console.log(e.data);
            break;
        case "finished":
            resetExecution(button);
            if (withDebug) return startDebugging();
            break;
        case "log":
            // console.log(e.data.content);
            if (withDebug) addConsoleOutput(e.data.content);
            else showLog(e.data.content);
            break;
        case "exception":
            showException(e.data.content);
            resetExecution(button);
            break;
        case "debug":
            addBreakpoint(e.data.content);
            break;
        case "breakpoint":
            changeBreakpointColor(parseInt(e.data.content.second_1) + 1);
            break;
    }
}

function writeToFile() {}

function resetExecution(button) {
    worker = null;
    button.style["-webkit-text-fill-color"] = "var(--green)";
}

function showLog(content) {
    let output = document
        .getElementsByClassName("console-record")[0]
        .cloneNode(true);
    output.style = "display:block;";
    output.getElementsByTagName("p")[0].innerText = content;
    document.getElementById("console").appendChild(output);
}

function terminateExecution() {
    if (worker != null) {
        worker.terminate();
        document
            .getElementById("start-button")
            .getElementsByTagName("i")[0].style["-webkit-text-fill-color"] =
            "var(--green)";
        document
            .getElementById("debug-button")
            .getElementsByTagName("i")[0].style["-webkit-text-fill-color"] =
            "var(--green)";
        worker = null;
    }
}

function showException(exception) {
    require(["vs/editor/editor.main"], function () {
        monaco.editor.setModelMarkers(window.editor.getModel(), "owner", [
            {
                message: exception.message,
                severity: monaco.MarkerSeverity.Error,
                startLineNumber: exception.position.y,
                startColumn: exception.position.x,
                endLineNumber: exception.position.y,
                endColumn: exception.position.x + exception.length,
            },
        ]);
    });
}

export { startExecution, showLog, addBreakpointsToCode, terminateExecution };
