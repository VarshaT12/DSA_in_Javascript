var shuffle = function (nums, n) {
    let x = [], y = [];
    x = nums.slice(0, n);
    y = nums.slice(n);
    nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(x[i], y[i]);
    }
    return nums;
};

let arr = [2, 5, 1, 3, 4, 7], n = 3;
console.log(shuffle(arr, n));
