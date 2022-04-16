const btn = document.querySelector('[data-btn]');

// We generally add anonymous functions as event handlers but to remove an event handler we need to add a named function
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('button clicked');
});

function printClick() {
    console.log('Clicked');
}

const form = document.querySelector('[data-form]');

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputElement = document.querySelector('input');
    console.log(inputElement.value);
});

let anchorElement = document.querySelector('a');
anchorElement.addEventListener('click', e => {
    e.preventDefault();
    console.log(anchorElement.href);
});

// different events -> click, change, input, submit, focus, blur, mouseenter, mouseleave, mouseover, resize
