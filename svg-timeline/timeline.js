document.addEventListener('DOMContentLoaded', function () {
    const svgNS = "http://www.w3.org/2000/svg";
    const timeline = document.getElementById('timeline');
    const addBlockButton = document.getElementById('add-block');
    const blocksContainer = document.getElementById('blocks-container');
    let blocks = [];
    let selectedBlockIndex = null;
    let labelYOffset = 5; // Vertical position of timeline labels

    // General settings inputs
    const startValueInput = document.getElementById('start-value');
    const endValueInput = document.getElementById('end-value');
    const showStartEndCheckbox = document.getElementById('show-start-end');
    const sectionsCountInput = document.getElementById('sections-count');
    const fontSizeInput = document.getElementById('font-size');
    const aliasColorInput = document.getElementById('alias-color');
    const separatorsStrokeWidthInput = document.getElementById('separators-stroke-width');
    const svgHeightInput = document.getElementById('svg-height');
    const labelsHigherButton = document.getElementById('labels-higher');
    const labelsLowerButton = document.getElementById('labels-lower');

    // Load saved data from localStorage
    function loadData() {
        const savedData = JSON.parse(localStorage.getItem('timelineData'));
        if (savedData) {
            // General settings
            startValueInput.value = savedData.startValue || 0;
            endValueInput.value = savedData.endValue || 0;
            showStartEndCheckbox.checked = savedData.showStartEnd || false;
            sectionsCountInput.value = savedData.sectionsCount || 1;
            fontSizeInput.value = savedData.fontSize || 5;
            aliasColorInput.value = savedData.aliasColor || '#000000';
            separatorsStrokeWidthInput.value = savedData.separatorsStrokeWidth || 0.5;
            svgHeightInput.value = savedData.svgHeight || 20;
            labelYOffset = savedData.labelYOffset || 5;

            // Blocks
            blocks = savedData.blocks || [];
            blocks.forEach((block, index) => {
                addBlockInputs(block, index);
            });
        }
    }

    // Save data to localStorage
    function saveData() {
        const data = {
            startValue: startValueInput.value,
            endValue: endValueInput.value,
            showStartEnd: showStartEndCheckbox.checked,
            sectionsCount: sectionsCountInput.value,
            fontSize: fontSizeInput.value,
            aliasColor: aliasColorInput.value,
            separatorsStrokeWidth: separatorsStrokeWidthInput.value,
            svgHeight: svgHeightInput.value,
            labelYOffset: labelYOffset,
            blocks: blocks
        };
        localStorage.setItem('timelineData', JSON.stringify(data));
    }

    // Add block inputs dynamically
    function addBlockInputs(block, index) {
        const blockDiv = document.createElement('div');
        blockDiv.className = 'block-inputs';
        blockDiv.innerHTML = `
            <div style="display: inline-block">
                <div>Alias</div>
                <input type="text" class="block-alias" value="${block.alias}"/>
            </div>
            <div style="display: inline-block">
                <div>Start</div>
                <input type="text" class="block-start" value="${block.start}"/>
            </div>
            <div style="display: inline-block">
                <div>End</div>
                <input type="text" class="block-end" value="${block.end}"/>
            </div>
            <div style="display: inline-block">
                <div>Color hex</div>
                <input type="text" class="block-color" value="${block.color}"/>
            </div>
            <div style="display: inline-block">
                <button class="block-higher">Higher</button>
            </div>
            <div style="display: inline-block">
                <button class="block-lower">Lower</button>
            </div>
            <div style="display: inline-block">
                <button class="block-remove">Remove</button>
            </div>
            <div style="display: inline-block">
                <div>Linecap</div>
                <select class="block-linecap">
                    <option value="">Default</option>
                    <option value="round">Round</option>
                    <option value="square">Square</option>
                    <option value="butt">Butt</option>
                </select>
            </div>
        `;
        blocksContainer.appendChild(blockDiv);

        // Add event listeners to the new block inputs
        const blockAliasInput = blockDiv.querySelector('.block-alias');
        const blockStartInput = blockDiv.querySelector('.block-start');
        const blockEndInput = blockDiv.querySelector('.block-end');
        const blockColorInput = blockDiv.querySelector('.block-color');
        const blockHigherButton = blockDiv.querySelector('.block-higher');
        const blockLowerButton = blockDiv.querySelector('.block-lower');
        const blockRemoveButton = blockDiv.querySelector('.block-remove');
        const blockLinecapSelect = blockDiv.querySelector('.block-linecap');

        blockLinecapSelect.addEventListener('change', () => {
            blocks[index].linecap = blockLinecapSelect.value;
            saveData();
            updateTimeline();
        });
        blockAliasInput.addEventListener('input', () => {
            blocks[index].alias = blockAliasInput.value;
            saveData();
            updateTimeline();
        });
        blockStartInput.addEventListener('input', () => {
            blocks[index].start = parseFloat(blockStartInput.value) || 0;
            saveData();
            updateTimeline();
        });
        blockEndInput.addEventListener('input', () => {
            blocks[index].end = parseFloat(blockEndInput.value) || 0;
            saveData();
            updateTimeline();
        });
        blockColorInput.addEventListener('input', () => {
            blocks[index].color = blockColorInput.value;
            saveData();
            updateTimeline();
        });

        // Higher/Lower buttons
        blockHigherButton.addEventListener('click', () => {
            if (blocks[index].yOffset > 0) { // Allow moving to the very top
                blocks[index].yOffset -= 1;
                saveData();
                updateTimeline();
            }
        });
        blockLowerButton.addEventListener('click', () => {
            const svgHeight = parseFloat(svgHeightInput.value) || 20;
            if (blocks[index].yOffset < svgHeight) { // Allow moving to the very bottom
                blocks[index].yOffset += 1;
                saveData();
                updateTimeline();
            }
        });

        // Remove button
        blockRemoveButton.addEventListener('click', () => {
            blocks.splice(index, 1); // Remove the block
            saveData();
            updateTimeline();
            blocksContainer.innerHTML = ''; // Clear all block inputs
            blocks.forEach((block, i) => addBlockInputs(block, i)); // Re-render block inputs
        });

        // Select this block when interacting with its inputs
        blockDiv.addEventListener('click', () => {
            selectedBlockIndex = index;
        });
    }

    // Update the timeline SVG
    function updateTimeline() {
        // Clear existing SVG content
        while (timeline.firstChild) {
            timeline.removeChild(timeline.firstChild);
        }

        const startValue = parseFloat(startValueInput.value) || 0;
        const endValue = parseFloat(endValueInput.value) || 0;
        const sectionsCount = parseFloat(sectionsCountInput.value) || 1;
        const sectionWidth = 200 / sectionsCount;
        const fontSize = parseFloat(fontSizeInput.value) || 5;
        const aliasColor = aliasColorInput.value;
        const separatorsStrokeWidth = parseFloat(separatorsStrokeWidthInput.value) || 0.5;
        const svgHeight = parseFloat(svgHeightInput.value) || 20;

        // Update SVG viewBox height
        timeline.setAttribute('viewBox', `0 0 200 ${svgHeight}`);

        // Add text labels (centered)
        for (let i = 0; i <= sectionsCount; i++) {
            const x = i * sectionWidth;
            const year = startValue + i * ((endValue - startValue) / sectionsCount);
            const text = document.createElementNS(svgNS, 'text');
            text.setAttribute('x', x + sectionWidth / 2); // Center the text
            text.setAttribute('y', labelYOffset);
            text.setAttribute('font-size', `${fontSize}px`);
            text.setAttribute('text-anchor', 'middle'); // Center alignment
            text.setAttribute('fill', aliasColor); // Use alias color for labels
            text.textContent = Math.floor(year);
            timeline.appendChild(text);
        }

        // Add vertical lines
        for (let i = 0; i <= sectionsCount; i++) {
            const x = i * sectionWidth;
            const line = document.createElementNS(svgNS, 'line');
            line.setAttribute('x1', x);
            line.setAttribute('y1', 0);
            line.setAttribute('x2', x);
            line.setAttribute('y2', svgHeight);
            line.setAttribute('stroke', aliasColor); // Use alias color for separators
            line.setAttribute('stroke-width', separatorsStrokeWidth);
            timeline.appendChild(line);
        }
        blocks.forEach((block, _) => {
            const blockLine = document.createElementNS(svgNS, 'line');
            const y = block.yOffset;

            // Map block start/end values to viewBox coordinates
            const startX = ((block.start - startValue) / (endValue - startValue)) * 200;
            const endX = ((block.end - startValue) / (endValue - startValue)) * 200;

            blockLine.setAttribute('x1', startX);
            blockLine.setAttribute('y1', y);
            blockLine.setAttribute('x2', endX);
            blockLine.setAttribute('y2', y);
            blockLine.setAttribute('stroke', block.color);
            blockLine.setAttribute('stroke-width', '1.5px');

            // Add alias on hover
            const aliasGroup = document.createElementNS(svgNS, 'g');
            aliasGroup.setAttribute('visibility', 'hidden'); // Hidden by default

            // Create a temporary text element to measure its size
            const tempText = document.createElementNS(svgNS, 'text');
            tempText.setAttribute('font-size', `${fontSize}px`);
            tempText.textContent = block.alias;
            timeline.appendChild(tempText);
            const bbox = tempText.getBBox(); // Get bounding box of the text
            timeline.removeChild(tempText); // Remove the temporary text

            // Add background rectangle
            const aliasBackground = document.createElementNS(svgNS, 'rect');
            aliasBackground.setAttribute('x', (startX + endX) / 2 - bbox.width / 2 - 2); // Center and add padding
            aliasBackground.setAttribute('y', y - bbox.height - 1); // Position above the line
            aliasBackground.setAttribute('width', bbox.width + 4); // Add padding
            aliasBackground.setAttribute('height', bbox.height); // Add padding
            aliasBackground.setAttribute('fill', 'var(--bg-color)'); // Use background color
            // aliasBackground.setAttribute('stroke', aliasColor); // Add border for visibility
            aliasBackground.setAttribute('stroke-width', '0.5px');

            // Add alias text
            const aliasText = document.createElementNS(svgNS, 'text');
            aliasText.setAttribute('x', (startX + endX) / 2); // Center alias
            aliasText.setAttribute('y', y - 2); // Position above the line
            aliasText.setAttribute('font-size', `${fontSize}px`);
            aliasText.setAttribute('text-anchor', 'middle');
            aliasText.setAttribute('fill', aliasColor); // Use alias color for aliases
            aliasText.textContent = block.alias;

            // Append background and text to the group
            aliasGroup.appendChild(aliasBackground);
            aliasGroup.appendChild(aliasText);

            // Show alias on hover
            blockLine.addEventListener('mouseover', () => {
                aliasGroup.setAttribute('visibility', 'visible');
                timeline.appendChild(aliasGroup); // Move alias group to the end for highest z-index
            });
            blockLine.addEventListener('mouseout', () => {
                aliasGroup.setAttribute('visibility', 'hidden');
            });

            timeline.appendChild(blockLine);
            timeline.appendChild(aliasGroup); // Append group last for highest z-index

            if (block.linecap) {
                blockLine.setAttribute('stroke-linecap', block.linecap);
            }
        });
    }

    // Add new block
    addBlockButton.addEventListener('click', function () {
        const newBlock = {
            alias: '',
            start: 0,
            end: 0,
            color: '#000000',
            yOffset: 0,
            linecap: ''
        };
        blocks.push(newBlock);
        addBlockInputs(newBlock, blocks.length - 1);
        saveData();
        updateTimeline();
    });

    // Move timeline labels higher/lower
    labelsHigherButton.addEventListener('click', () => {
        if (labelYOffset > 0) {
            labelYOffset -= 1;
            saveData();
            updateTimeline();
        }
    });
    labelsLowerButton.addEventListener('click', () => {
        const svgHeight = parseFloat(svgHeightInput.value) || 20;
        if (labelYOffset < svgHeight) {
            labelYOffset += 1;
            saveData();
            updateTimeline();
        }
    });

    // Load saved data and initialize
    loadData();
    updateTimeline();

    // Save data on general settings change
    startValueInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    endValueInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    showStartEndCheckbox.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    sectionsCountInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    fontSizeInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    aliasColorInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    separatorsStrokeWidthInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
    svgHeightInput.addEventListener('input', () => {
        saveData();
        updateTimeline();
    });
});
