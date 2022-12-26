
// let arr = [21, 20, 10, 10, 10, 9, 6, 4, 2];
let arr = [1, 4, 6, 10, 10, 20];
let ele = 10;
let start = 0;
let end = arr.length - 1;
let mid = -1;

const AscendingValue = (arr) => {

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
}


const DescendingValue = (arr) => {
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            end = mid - 1;
        } else if (ele < arr[mid]) {
            start = mid + 1;
        } else {
            start = mid - 1;
        }
    }
    return start;
}

const minIndexOfDuplicate = function (array) {
    var start = 0;
    var end = array.length - 1;
    if (array[start] > array[end]) {
        let desRes = DescendingValue(array);
        return desRes;
    }
    else {
        let ascRes = AscendingValue(array);
        return ascRes;
    }
}


console.log(minIndexOfDuplicate(arr));