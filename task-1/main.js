"use strict";
const textElement = document.getElementById('container-text');
const textEditElement = document.getElementById('edit-text');

document.addEventListener('keydown', (event) => {
    if (event.metaKey && event.key === "e") {
        event.preventDefault();
        keyPressEdit();
    };

    if (event.metaKey && event.key === "s") {
        event.preventDefault();
        keyPressSave();
    };
})

function keyPressEdit () {
    textElement.style.display = 'none';
    textEditElement.style.display = 'block';
    textEditElement.value = textElement.innerText;
}

function keyPressSave () {
    textElement.innerText = textEditElement.value;
    textElement.style.display = 'block';
    textEditElement.style.display = 'none';
}
