var removeDuplicates = function (nums) {
    let output = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            output.push(nums[i]);
        }
        if (i + 1 == nums.length - 1) {
            output.push(nums[i + 1]);
        }
    }
    return output;
};
let arr = [1, 1, 1];
console.log(removeDuplicates(arr));
