'use strict';

const startBtn = document.querySelector('.start-btn');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');
const resultDisplay = document.querySelector('.result-display');
const body = document.querySelector('body');
const field = document.querySelector('.field');
const result = document.querySelector('.result');
const restart = document.querySelector('.again-btn')

let time = 10;

function startTimer() {
    timer.innerText = `00:10`;
    const interval = setInterval(() => {
        time--;
        timer.innerText = `00:${time}`;
        if(!resultDisplay.classList.contains('hidden')) {
            clearInterval(interval);
        };
        if (time === 0) {
            clearInterval(interval);
            timer.innerText = '00:00';
            resultDisplay.classList.remove('hidden');
            result.innerText = 'You Lost!';
        }
    }, 1000)
}

function createBug() {
    const bug = document.createElement('img');
    let randomHeight = Math.round(Math.random() * field.getBoundingClientRect().height);
    let randomWidth = Math.round(Math.random() * field.getBoundingClientRect().width);
    bug.classList.add('position-absolute');
    bug.classList.add('bug');
    bug.style.bottom = `${randomHeight}px`;
    bug.style.left = `${randomWidth}px`;
    bug.src = 'img/bug.png';
    field.appendChild(bug);
    bug.addEventListener('click', () => {
        resultDisplay.classList.remove('hidden');
        result.innerText = 'You Lost!';
    })
}

let counterNumber = 10;

function createCarrot() {
    counter.innerText = counterNumber;
    const carrot = document.createElement('img');
    let randomHeight = Math.round(Math.random() * field.getBoundingClientRect().height);
    let randomWidth = Math.round(Math.random() * field.getBoundingClientRect().width);
    carrot.classList.add('position-absolute');
    carrot.classList.add('carrot');
    carrot.style.bottom = `${randomHeight}px`;
    carrot.style.left = `${randomWidth}px`;
    carrot.src = 'img/carrot.png';
    field.appendChild(carrot);
    carrot.addEventListener('click', () => {
        carrot.remove();
        counterNumber--;
        counter.innerText = counterNumber;
        if (counterNumber === 0) {
            resultDisplay.classList.remove('hidden');
            result.innerText = 'You Win!';
        }
    })
}

startBtn.addEventListener('click', (e) => {
    startTimer();
    for (let i = 0; i < 10; i++) {
        createBug();
        createCarrot();
    };
})

restart.addEventListener('click', () => {
    const bugs = document.querySelectorAll('.bug');
    const carrots = document.querySelectorAll('.carrot');
    time = 10;
    timer.innerText = '00:10';
    counter.innerText = 10;
    counterNumber = 10;
    
    bugs.forEach((bug) => {
        bug.remove();
    });
    carrots.forEach((carrot) => {
        carrot.remove();
    })
    resultDisplay.classList.add('hidden');
});