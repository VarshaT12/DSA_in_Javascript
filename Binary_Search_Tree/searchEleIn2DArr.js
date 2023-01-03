let rows = 4;
let columns = 4;
let c = 10;
let myArr = new Array();

for (let i = 0; i < rows; i++) {
    myArr[i] = [];
    for (let j = 0; j < columns; j++) {
        myArr[i][j] = c;
        c = c + 2;
    }
}
console.log(myArr);
