let arr = [2, 4, 6, 7, 9, 8, 5, 3];
let start = 0;
let end = arr.length - 1;
let mid = -1;

const MaxElementInBitonicArray = (arr) => {
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        } else if (arr[mid] > arr[mid - 1]) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
};

console.log(MaxElementInBitonicArray(arr));