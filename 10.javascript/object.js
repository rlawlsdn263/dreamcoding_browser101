//변수: 데이터를 담고 있는 아이

//원시타입, 가장 작은 단위 - number, string, boolean, null, undefined, symbol
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

//오브젝트, 데이터 묶음 - 배열, 리스트, 함수 etc
let obj = {
    name: 'jinu',
    age: '27',
};
console.log(obj);
console.log(obj.name);

let obj2 = obj; //참조값을 복사해서 가져온다
console.log(obj2); 

obj.name = 'james';
console.log('--------');
console.log(obj.name);
console.log(obj2.name);

//변수를 선언하면 메모리에 값이 할당된다.
//오브젝트는 참조값이 할당된다.

const obj3 = {
    name: 'kim',
    age: '5',
};
console.log(obj3);

//자체는 변경X
// obj3 = {
//     name: 'jinu',
//     age: '27',
// }

//오브젝트는 오브젝트 자체가 메모리에 담긴 게 아니라 
//참조값이 주어지기 때문에 참조값 자체를 변경하는 건X
//안의 내용은 변경 O
obj3.name = 'James';
console.log(obj3);