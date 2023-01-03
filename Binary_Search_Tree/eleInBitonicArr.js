let arr = [2, 4, 6, 7, 9, 8, 5, 3];
let ele = 6;
let start = 0;
let end = arr.length - 1;
let mid = -1;

const ElementIndexInBitonicArray = (arr) => {
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == ele) {
            return mid;
        } else if (arr[mid] < ele) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};

console.log(ElementIndexInBitonicArray(arr));