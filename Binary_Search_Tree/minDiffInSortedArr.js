let arr = [2, 3, 4, 5, 6, 9, 10, 15, 18, 19, 20];
let ele = 7;
let start = 0;
let end = arr.length - 1;
let mid = -1;

const MinimumDiffElementInSortedArray = (arr) => {
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele == arr[mid]) {
            return ele;
        } else if (ele > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    if (Math.abs(arr[start] - ele) < Math.abs(arr[end] - ele)) {
        return arr[start];
    } else {
        return arr[end];
    }
}

console.log(MinimumDiffElementInSortedArray(arr));