let svg = document.getElementById("timeline")

Array.from(svg.getElementsByClassName("line-block")).forEach(blockLine => {
    let alias = blockLine.nextElementSibling;
    blockLine.addEventListener('mouseover', () => {
        alias.setAttribute('visibility', 'visible');

    });
    blockLine.addEventListener('mouseout', () => {
        alias.setAttribute('visibility', 'hidden');
    });
})
