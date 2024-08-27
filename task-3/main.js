"use strict";

const resizableElement = document.getElementById('resizable-block');
const resizerElement = document.getElementById('resizer');

resizer.addEventListener('mousedown', (event) => {
    event.preventDefault();

    const startX = event.clientX;
    const startY = event.clientY;

    const startWidth = parseInt(document.defaultView.getComputedStyle(resizableElement).width, 10);
    const startHeight = parseInt(document.defaultView.getComputedStyle(resizableElement).height, 10);

    function resize(event) {
        const currentX = event.clientX;
        const currentY = event.clientY;

        const newWidth = startWidth + (currentX - startX);
        const newHeight = startHeight + (currentY - startY);

        const minWidth = resizableElement.scrollWidth;
        const minHeight = resizableElement.scrollHeight;

        resizableElement.style.width = `${Math.max(newWidth, minWidth)}px`;
        resizableElement.style.height = `${Math.max(newHeight, minHeight)}px`;
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    }

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
});

