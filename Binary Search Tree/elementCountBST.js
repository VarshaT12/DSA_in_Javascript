// let arr = [21, 20, 10, 10, 10, 9, 6, 4, 2];
let arr = [1, 4, 10, 10, 10, 10, 20, 21];

const MinIndex = (arr) => {
    let ele = 10;
    let start = 0;
    let end = arr.length - 1;
    let mid = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            end = mid - 1;
        } else if (ele < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

const MaxIndex = (arr) => {
    let ele = 10;
    let start = 0;
    let end = arr.length - 1;
    let mid = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            start = mid + 1;
        } else if (ele < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

const CountElement = (arr) => {
    let start = MinIndex(arr);
    let end = MaxIndex(arr);
    let count = end - start + 1;
    return count;
}

console.log(CountElement(arr));