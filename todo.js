const button = document.querySelector('form');

const addItem = val => {
    const list = document.querySelector('#list');
    const item = document.createElement('li');
    item.innerText = val;
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const val = item.style.textDecoration;
        if (val === 'line-through') item.style.textDecoration = 'none';
        else item.style.textDecoration = 'line-through';
    });
    list.appendChild(item);
};

// const list = document.querySelectorAll('#list > li');
// list.forEach(listItem => {
//     listItem.addEventListener('click', ())
// })

button.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('input');
    addItem(input.value);
    input.value = '';
});
