const num = 1;
const num2 = 2;
const result = num + num2 
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

//반복적으로 수행되는 일은 함수로 만들어준다
//함수는 재사용이 가능하기 때문이다

function add(num1, num2) {
    return num1 + num2;
}

const sum = add(3, 4);
console.log(sum);

/*오늘의 포인트!*/

//함수는 이름 자체는 함수가 정의된 곳을 가리킨다
//함수에 이름을 다른 변수에 할당하면 이 함수가 가리키고 있는 주소가
//doSomething에 할당됐기 때문에 결국은 똑같은 함수를 수행한다.
const doSomething = add;
const result3 = doSomething(2, 3);
console.log(result3); //5

function print() {
    console.log('print');
}

print(); //print;
// 인자가 없는 함수는 무시한다
print(3, 22); //print;

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3); //add(2, 3);
    console.log(result);
}

surprise(add); //5
surprise(divide); 