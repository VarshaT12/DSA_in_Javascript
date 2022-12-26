let arr = [5, 9, 10, 11, 20, 15];
let start = 0;
let end = arr.length - 1;
let mid = -1;

const PeakElement = (arr) => {
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (mid != start && mid != end) {
            if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
                return arr[mid];
            } else if (arr[mid] < arr[mid + 1]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (arr[mid] == arr[start]) {
                return arr[start];
            } else {
                return arr[end];
            }
        }
    }
}

console.log(PeakElement(arr));