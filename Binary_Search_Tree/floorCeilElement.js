let arr = [1, 4, 6, 8, 9, 10, 20, 21, 22, 24, 25];

const FloorElement = (arr) => {
    let ele = 8;
    let start = 0;
    let end = arr.length - 1;
    let mid = -1;

    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            return mid;
        } else if (ele < arr[mid]) {
            end = mid - 1;
        } else {
            var res = arr[mid];
            start = mid + 1;
        }
    }
    return res;
}

console.log(FloorElement(arr));



const CeilElement = (arr) => {
    let ele = 8;
    let start = 0;
    let end = arr.length - 1;
    let mid = -1;

    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            return arr[mid];
        } else if (ele < arr[mid]) {
            var res = arr[mid];
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return res;
}

console.log(CeilElement(arr));