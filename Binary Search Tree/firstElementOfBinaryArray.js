let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const FirstElementOfBinarySortedArray = (arr) => {
    let ele = 1;
    let start = 0;
    let end = 1;
    let mid = -1;
    while (arr[end] < ele) {
        start = end;
        end = end * 2;
    }

    while (start <= end) {
        // mid = Math.floor(start + (end - start) / 2);
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

console.log(FirstElementOfBinarySortedArray(arr));