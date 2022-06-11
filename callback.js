//콜백함수를 이용해 클래스를 만들면 사용자가 변경이 가능하다.

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`Wow! ${num}`);
};

function alertNum(num) {
    alert(`alert! ${num}`);
};

const coolCounter = new Counter(alertNum);

//장점 - 우리가 조정할 수 있다.

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
