document.addEventListener('DOMContentLoaded', function() {
    let resizer;
    let leftSide;
    let rightSide;
    // The current position of mouse
    let x = 0;
    let y = 0;
    let leftWidth = 0;
    let rightWidth = 0;

    // Handle the mousedown event
    // that's triggered when user starts dragging the resizer
    const mouseDownHandler = function(e) {
        resizer = e.target;

        leftSide = resizer.previousElementSibling == null ? resizer : resizer.previousElementSibling;
        rightSide = resizer.nextElementSibling == null ? resizer : resizer.nextElementSibling;

        // Get the current mouse position
        x = e.clientX;
        y = e.clientY;

        if (resizer.className == 'horizontal-resizer') {
            leftWidth = leftSide.getBoundingClientRect().height;
            rightWidth = rightSide.getBoundingClientRect().height;
        } else {
            leftWidth = leftSide.getBoundingClientRect().width;
            rightWidth = rightSide.getBoundingClientRect().width;
        }

        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        if (resizer.className == 'horizontal-resizer') {
            const newLeftWidth = ((leftWidth + dy) * 100) / resizer.parentNode.getBoundingClientRect().height;
            const newRightWidth = ((rightWidth - dy) * 100) / resizer.parentNode.getBoundingClientRect().height;
            if (newRightWidth > 10 && newLeftWidth > 10) {
                leftSide.style.height = `${newLeftWidth}%`;
                rightSide.style.height = `${newRightWidth}%`;
            }
            resizer.style.cursor = 'ns-resize';
            document.body.style.cursor = 'ns-resize';
        } else {
            const newLeftWidth = ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
            const newRightWidth = ((rightWidth - dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
            // 12 is to prevent Debug button moving under Settings button
            if (newRightWidth > 10 && newLeftWidth > 12) {
                leftSide.style.width = `${newLeftWidth}%`;
                rightSide.style.width = `${newRightWidth}%`;
            }
            resizer.style.cursor = 'ew-resize';
            document.body.style.cursor = 'ew-resize';
        }


        leftSide.style.display = 'block';
        rightSide.style.display = 'block';
        leftSide.style.userSelect = 'none';
        leftSide.style.pointerEvents = 'none';

        rightSide.style.userSelect = 'none';
        rightSide.style.pointerEvents = 'none';

        // leftSide.style.flex = '0';
        // rightSide.style.flex = '1';
    };

    const mouseUpHandler = function() {
        resizer.style.removeProperty('cursor');
        document.body.style.removeProperty('cursor');

        // leftSide.style.flex = '0';
        // rightSide.style.flex = '0';
        leftSide.style.removeProperty('user-select');
        leftSide.style.removeProperty('pointer-events');

        rightSide.style.removeProperty('user-select');
        rightSide.style.removeProperty('pointer-events');

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    const resizers = document.getElementsByClassName('resizer');
    for (let i = 0; i < resizers.length; i++) {
        resizers[i].addEventListener('mousedown', mouseDownHandler);
    }
    const horizontalResizers = document.getElementsByClassName('horizontal-resizer');
    for (let i = 0; i < horizontalResizers.length; i++) {
        horizontalResizers[i].addEventListener('mousedown', mouseDownHandler);
    }
});
