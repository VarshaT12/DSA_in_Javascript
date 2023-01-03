var runningSum = function (nums) {
    let sum = [], a = 0;
    for (let i = 0; i < nums.length; i++) {
        a = a + nums[i];
        sum.push(a);
    };
    return sum;
};


let arr = [1, 2, 3, 4];
console.log(runningSum(arr))