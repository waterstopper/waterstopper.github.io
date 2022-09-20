var descriptions = [
    {
        class: ["resizer", "horizontal-resizer"],
        title: "- resizers -",
        description:
            "For layout customization. Buttons placed on resizers are to show/hide panels",
    },
    {
        id: ["console"],
        title: "- Console output -",
        description: `Console output produced by the program is displayed in this panel.
            Click <i class="fas fa-trash" aria-hidden="true" style="font-size:bigger;"></i> to clear console.`,
    },
    {
        id: ["file-panel"],
        title: "- File tree -",
        description: `<span style="color:var(--ident-color)">Library files (std, generators, intro.rgn)</span> are readonly in a sense that changes are not saved between sessions.
            <br><strong style='margin-left:2em; color:var(--middle-color)'>'resources'</strong> folder files are accessible for reading from code (they are passed to web worker)`,
    },
    {
        id: ["svg-result"],
        title: "- SVG result -",
        description:
            "SVG image produced by the program is displayed in this panel.",
    },
    // {
    //     id: [
    //         "left-panel-button",
    //         "hide-console",
    //         "show-settings",
    //         "show-debug",
    //     ],
    //     title: "view buttons",
    //     description: "",
    // },
    {
        class: ["button-list"],
        title: "- control buttons -",
        description: `<span style='color:var(--green);'>Run</span>:
         execute code without breakpoints. Starts from currently opened file. 
        Only one running program is allowed.<br>
        <span style='color:var(--green); margin-left: 2em'>Debug</span>:
         debug code.<br>
        <span style='color:var(--red); margin-left: 2em'>Terminate</span>:
         terminate currently running program.<br>
        <span style='color:var(--middle-color); margin-left: 2em'>Save</span>: 
        manually save current file (useful if autosave turned off).<br>`,
    },
    {
        class: ["tabs .scrollable"],
        title: "tabs",
        description:
            "Closing a library tab will delete all changes, including breakpoints, undo/redo stack",
    },
    {
        id: ["bottom-left-panel"],
        title: "- Debug -",
        description: `
        <span style="color:var(--gray)">One panel is dedicated for settings
         and debug switch between them with resizer buttons</span><br>
        <span style="margin-left:2em"></span>Place breakpoints on line
         by clicking on the left of the line number in editor.
         All breakpoints should be placed before debugging.`,
    },
];

var tips = [
    "Buttons are hoverable",
    "Keep imports open",
    "Use dynamic properties",
    "Put globals into objects",
    "Inheritance is overrated",
    "Use files from std",
    `Created something cool? <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScqsdD7BmKWK_GJgfmLQ1V8e8mvegwPUHe-TxpnOGZP95Y-xQ/viewform"
    target="_blank">Leave feedback</a> (in settings)`,
    "Don't write to lib from code",
];
