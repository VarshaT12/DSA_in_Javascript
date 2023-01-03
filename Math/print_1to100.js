// list from 1 to 100

// 1. first type 

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

var result = range(14, 20);
console.log(result);

// 2. Second type

var result = [...Array(20).keys()];
console.log(result);

// 3. Third type

// for (i of range(1, 10)) {
//     console.log(i);
// }

// var result = [...range(1, 10)]
// console.log(result);

