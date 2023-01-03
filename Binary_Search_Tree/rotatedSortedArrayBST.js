let arr = [11, 12, 13, 14, 15, 18, 2, 4, 6, 8, 9];
let mid = -1;
let start = 0;
let end = arr.length - 1;

const minElementIndex = (arr) => {
    let N = arr.length;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let next = (mid + 1) % N;
        let pre = (mid + N - 1) % N;
        if (arr[pre] > arr[mid] && arr[next] > arr[mid]) {
            return N - mid;
        } else if (arr[mid] > arr[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

const rotatedSortedArray = (arr) => {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[start] < arr[mid] && arr[end] > arr[mid]) {
        start;
    } else {
        return minElementIndex(arr)
    }
};

console.log(rotatedSortedArray(arr));