let arr = ['a', 'c', 'd', 'g', 'h', 'k', 'm', 'n'];
let ele = 'h';
let start = 0;
let end = arr.length - 1;
let mid = -1;

const NextElementOfCharArray = (arr) => {
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (ele.charCodeAt(0) == arr[mid].charCodeAt(0)) {
            return arr[arr.indexOf(ele) + 1]
        } else if (ele.charCodeAt(0) < arr[mid].charCodeAt(0)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
};

console.log(NextElementOfCharArray(arr));