// false: 0, -0, '', null, undefined
//true: -1, 'hello', 'false'
//데이터가 없고 빈 것들은 false

// let num; undefined - false
// if(num) {
//     console.log('true!');
// } else {
//     console.log('false!');
// }

// num && console.log(num);
//num이 true면 num을 출력한다.

let obj = {
    name: 'jinu',
};

if (obj) {
    console.log(obj);
}

obj && console.log(obj.name); //jinu