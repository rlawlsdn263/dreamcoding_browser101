// let count = 0;
// for(let i = 1; i <= 100; i += 7) {
//     count++
//     console.log(`i: ${i}, count: ${count}`);
// }

let array = [1, 2, 3, 3, 3, 3, 4, 4];

function findMatch(array) {
    //배열 안에 반복되는 수를 return한다
    for(let i = 0; i < array.length; i++) {
        if(array[i] == array[i+1]) {

        }
    }

    //만약 중복되는 수가 없다면 -1을 return한다
};

const counts = {};
const sampleArray = [1, 2, 3, 3, 3, 3, 4, 4];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)