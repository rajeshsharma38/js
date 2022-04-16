const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const modalDiv = document.querySelector('#modal');
const overlayDiv = document.querySelector('#overlay');
openModalBtn.addEventListener('click', e => {
    e.stopPropagation();
    modalDiv.classList.add('open');
    overlayDiv.classList.add('open');
});

modalDiv.addEventListener('click', e => {
    e.stopImmediatePropagation();
    e.stopPropagation();
});

const body = document.querySelector('body');
body.addEventListener('click', e => {
    modalDiv.classList.remove('open');
    overlayDiv.classList.remove('open');
});

closeModalBtn.addEventListener('click', () => {
    modalDiv.classList.remove('open');
    overlayDiv.classList.remove('open');
});
