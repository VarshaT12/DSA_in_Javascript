let arr = [2, 4, 6, 11, 13, 16, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30];  //let this is infinite sorted array.

const ElementOfInfinitesortedArray = (arr) => {
    let ele = 16;
    let start = 0;
    let end = 1;
    let mid = -1;
    while (arr[end] < ele) {
        start = end;
        end = end * 2;
    }

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
};

console.log(ElementOfInfinitesortedArray(arr));

