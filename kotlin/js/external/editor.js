import * as themes from "./themes.js";
//import {getFile} from "../storage.js"

async function getFile(path) {
    // lib file
    if (localStorage.getItem(path) == null) {
        let res = (
            await (
                await fetch("https://alex5041.github.io/reginafiles/" + path)
            ).text()
        ).toString();
        //console.log(res, typeof res)
        return res;
        // .then((response) => response.text())
        // .then((code) => {
        //     console.log(code);
        // });
    }
    // user file
    else return localStorage.getItem(path);
}

require.config({
    paths: {
        vs: "../../kotlin/monaco-editor/min/vs",
    },
});
require(["vs/editor/editor.main"], function () {
    // Register a new language
    monaco.languages.register({
        id: "Regina",
    });

    const config = {
        surroundingPairs: [
            {
                open: "{",
                close: "}",
            },
            {
                open: "[",
                close: "]",
            },
            {
                open: "(",
                close: ")",
            },
            {
                open: "'",
                close: "'",
            },
            {
                open: '"',
                close: '"',
            },
        ],
        autoClosingPairs: [
            {
                open: "/*",
                close: "*/",
            },
            {
                open: "{",
                close: "}",
            },
            {
                open: "[",
                close: "]",
            },
            {
                open: "(",
                close: ")",
            },
            {
                open: "'",
                close: "'",
                notIn: ["string", "comment"],
            },
            {
                open: '"',
                close: '"',
                notIn: ["string", "comment"],
            },
        ],
        brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ],
    };
    monaco.languages.setLanguageConfiguration("Regina", config);

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider("Regina", {
        keywords: [
            "continue",
            "if",
            "break",
            "else",
            "return",
            "class",
            "fun",
            "while",
        ],
        operators: [
            "=",
            ">",
            "<",
            "!",
            "?",
            ":",
            "==",
            "<=",
            ">=",
            "!=",
            "&&",
            "||",
            "+",
            "-",
            "*",
            "/",
            "%",
        ],
        // we include these common regular expressions
        symbols: /[=><!?:&|+\-*\/%]+/,
        // C# style strings
        escapes:
            /\\(?:[abfnrtv\\"']|x[\dA-Fa-f]{1,4}|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})/,
        tokenizer: {
            root: [
                // identifiers and keywords
                [
                    /[a-z_$][\w$]*/,
                    {
                        cases: {
                            "@keywords": "keyword",
                            "@default": "identifier",
                        },
                    },
                ],
                [/[A-Z][\w$]*/, "type.identifier"], // to show class names nicely
                [/([A-Za-z]\\w*)(\\.[A-Za-z]\\w*)*/, "link"],

                // whitespace
                {
                    include: "@whitespace",
                },
                [/\/\/.$/, "comment"],

                // delimiters and operators
                [/[{}()\[\]]/, "@brackets"],
                [/[<>](?!@symbols)/, "@brackets"],
                [
                    /@symbols/,
                    {
                        cases: {
                            "@operators": "operator",
                            "@default": "",
                        },
                    },
                ],
                // @ annotations.
                // As an example, we emit a debugging log message on these tokens.
                // Note: message are suppressed during the first load -- change some lines to see them.
                [
                    /@\s*[a-zA-Z_$][\w$]*/,
                    {
                        token: "annotation",
                        log: "annotation token: $0",
                    },
                ],

                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
                [/\d+/, "number"],

                // delimiter: after number because of .\d floats
                [/[;,.]/, "delimiter"],

                // strings
                [/"([^"\\]|\\.)*$/, "string"], // non-terminated string
                [
                    /"/,
                    {
                        token: "string.quote",
                        bracket: "@open",
                        next: "@string",
                    },
                ],

                // characters
                [/'[^\\']'/, "string"],
                [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
                [/'/, "string.invalid"],
            ],

            comment: [
                [/[^\/*]+/, "comment"],
                [/\/\*/, "comment", "@push"], // nested comment
                ["\\*/", "comment", "@pop"],
                [/[\/*]/, "comment"],
            ],

            string: [
                [/[^\\"]+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [
                    /"/,
                    {
                        token: "string.quote",
                        bracket: "@close",
                        next: "@pop",
                    },
                ],
            ],

            whitespace: [
                [/[ \t\r\n]+/, "white"],
                [/\/\*/, "comment", "@comment"],
                [/\/\/.*$/, "comment"],
            ],
        },
    });

    monaco.editor.defineTheme("regina-light", themes.light);

    monaco.editor.defineTheme("regina-dark", themes.dracula);

    // Register a completion item provider for the new language
    monaco.languages.registerCompletionItemProvider("Regina", {
        provideCompletionItems: (model, position) => {
            let suggestions;
            if (position.column === 2) {
                suggestions = [
                    {
                        label: "fun",
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: "fun",
                    },
                    {
                        label: "class",
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: "class",
                    },
                    {
                        label: "object",
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: "object",
                    },
                    {
                        label: "fun template",
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: ["fun $1() {", "\t$0", "}"].join("\n"),
                        insertTextRules:
                            monaco.languages.CompletionItemInsertTextRule
                                .InsertAsSnippet,
                    },
                    {
                        label: "import",
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: "import",
                        insertTextRules:
                            monaco.languages.CompletionItemInsertTextRule
                                .InsertAsSnippet,
                    },
                    {
                        label: "import as",
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: "import $1 as $0",
                        insertTextRules:
                            monaco.languages.CompletionItemInsertTextRule
                                .InsertAsSnippet,
                    },
                    {
                        label: "class template",
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: ["class ${1:name} {", "\t$0", "}"].join(
                            "\n"
                        ),
                        insertTextRules:
                            monaco.languages.CompletionItemInsertTextRule
                                .InsertAsSnippet,
                        documentation: "class template",
                    },
                    {
                        label: "object template",
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: ["object ${1:name} {", "\t$0", "}"].join(
                            "\n"
                        ),
                        insertTextRules:
                            monaco.languages.CompletionItemInsertTextRule
                                .InsertAsSnippet,
                        documentation: "class template",
                    },
                ];
                return {
                    suggestions: suggestions,
                };
            }
            suggestions = [
                {
                    label: "while",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "while",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                },
                {
                    label: "if",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "if",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                },
                {
                    label: "else",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "else",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                },
                {
                    label: "return",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "return",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                },
            ];
            if (position.column > 8) {
                suggestions.push({
                    label: "break",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "break",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                });
                suggestions.push({
                    label: "continue",
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    insertText: "continue",
                    insertTextRules:
                        monaco.languages.CompletionItemInsertTextRule
                            .InsertAsSnippet,
                });
            }
            return {
                suggestions: suggestions,
            };
        },
    });

    window.editor = monaco.editor.create(document.getElementById("container"), {
        value:
            localStorage.getItem("main.rgn") == null
                ? ["Hello, it is your first visit!", "Reload the page to proceed", ""].join("\n")
                : JSON.parse(localStorage.getItem("main.rgn")).code,
        language: "Regina",
        glyphMargin: true,
        fontFamily: "Fira Code",
        fontLigatures: true,
        //theme: "regina-light",
        automaticLayout: true,
        minimap: {
            enabled: false,
        },
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0,
    });

    var breakpoints = window.editor.deltaDecorations([breakpoints], []);

    window.editor.onMouseDown(function (e) {
        if (e.target.type === 2) {
            if (e.target.element.className.includes("codicon")) {
                window.currentTab.bList = window.currentTab.bList.filter(
                    (breakpoint) =>
                        breakpoint.range.startLineNumber !==
                        e.target.position.lineNumber
                );
            } else {
                let pos = e.target.position;
                window.currentTab.bList.push({
                    range: new monaco.Range(
                        pos.lineNumber,
                        1,
                        pos.lineNumber,
                        1
                    ),
                    options: {
                        isWholeLine: true,
                        //className: 'breakpoint',
                        glyphMarginClassName: "fas fa-circle",
                    },
                });
            }
        }
        breakpoints = window.editor.deltaDecorations(
            breakpoints,
            window.currentTab.bList
        );
    });

    window.editor.getBreakpoints = function () {
        return window.currentTab.bList;
    };

    window.editor.setBreakpoints = function (list) {
        breakpoints = window.editor.deltaDecorations(breakpoints, list);
    };

    monaco.languages.registerCodeLensProvider("Regina", {
        provideCodeLenses: function (model, token) {
            return {
                lenses: [
                    {
                        range: {
                            startLineNumber: 1,
                            startColumn: 1,
                            endLineNumber: 2,
                            endColumn: 1,
                        },
                        id: "First Line",
                        command: {
                            //id: commandId,
                            title: "Changes in library file are removed after page reload",
                        },
                    },
                ],
                dispose: () => {},
            };
        },
        resolveCodeLens: function (model, codeLens, token) {
            return codeLens;
        },
    });

    var openedFiles = {};
    window.editor.openFile = async function (path) {
        let code = await getFile(path);
        openedFiles[path] = monaco.editor.createModel(code, "Regina");
        window.editor.setModel(openedFiles[path]);
    };
    window.editor.closeFile = function (path) {
        openedFiles[path].dispose();
        localStorage.removeItem("file:" + path);
    };
    window.editor.switchFile = function (path) {
        window.editor.setModel(openedFiles[path]);
    };
    // window.editor.openFile("s")
    // window.editor.closeFile("s")
    // window.editor.openFile("s")
    //window.m1 = monaco.editor.createModel()
    //window.m2 = monaco.editor.createModel()

    //console.log(window.editor)
    //console.log(window.m1)
    //window.editor.setModel(window.m1)
    //state1 = window.editor.saveViewState()
});

document.documentElement.setAttribute("data-theme", "light");
