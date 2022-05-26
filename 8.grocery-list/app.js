const listItems = document.querySelector('.shopping-list-items');
const listItem = document.querySelector('.shopping-list-item');
const listForm = document.querySelector('.shopping-list-form');
const listAdd = document.querySelector('.shopping-list-add');

const listInput = listForm.querySelector('input');
const listAddBtn = listAdd.querySelector('button');
const listDeleteBtn = listItem.querySelector('.item-delete');

function paintItem(item) {
    const div = document.createElement('div');
    div.classList.add('shopping-list-item');
    const span = document.createElement('span');
    span.classList.add('item-name');
    span.innerText = item;
    const button = document.createElement('button');
    button.classList.add('item-delete');
    button.innerHTML = '<i class="fas fa-solid fa-trash"></i>';
    div.append(span);
    div.append(button);
    listItems.append(div);

    button.addEventListener('click', () => {
        button.parentElement.remove();
    })
}

function inputHandler(e) {
    e.preventDefault();
    const savedInputValue = listInput.value;
    listInput.value = '';
    paintItem(savedInputValue);
};

listForm.addEventListener('submit', inputHandler);
listAddBtn.addEventListener('click', (e) => {
    const value = listInput.value;
    if(value) {
        paintItem(value);
        listInput.value = '';
    } else {
        e.preventDefault();
    }
});
