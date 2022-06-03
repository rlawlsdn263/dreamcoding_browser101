const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
//script 위치가 head에서 body로 가자 정상동작!

form.addEventListener('submit', e => {
    e.preventDefault();
    onAdd();
});

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아와야 함!
    const text = input.value;
    if ( text === '') {
        input.focus();
        return;
    }

    //2. 새로운 아이템을 생성(텍스트 + 삭제 버튼)
    const item = createItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});

    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus(); //자동으로 focus를 줌
}

let id = 0; //UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <buttom class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </buttom>
            </div>
            <div class="item__divider"></div>`;
    id++;
    return itemRow;
}

// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// input.addEventListener('keydown', (e) => {
//     if(e.key === 'a') {
//         e.preventDefault();
//     }
//     한글과 같은 조합 문자를 쓸 때는 keyup을 하거나 isComposing 사용
//     if(e.isComposing) {
//         return;
//     }
//     if(e.key === 'Enter') {
//         onAdd();
//     }
// });

items.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    };
});

// items.addEventListener('click', e => {
//     if(e.target.tagName == 'I') {
//         const item = document.querySelector('.item__row');
//         items.removeChild(item);
//     }
// });