
const AscendingValue = (x) => {
    let arr = [2, 4, 6, 11, 13, 16, 18, 20, 21];
    let ele = 11;
    let start = 0;
    let end = arr.length - 1;
    let mid = -1;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            return mid;
        } else if (ele < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}


const DescendingValue = (x) => {
    let array = [21, 20, 18, 16, 13, 11, 6, 4, 2];
    let elem = 11;
    let min = 0;
    let max = array.length - 1;
    let middle = -1;
    while (min <= max) {
        middle = Math.floor(min + (max - min) / 2);
        if (elem == array[middle]) {
            return middle;
        } else if (elem < array[middle]) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }
}

console.log(AscendingValue());
console.log(DescendingValue());
