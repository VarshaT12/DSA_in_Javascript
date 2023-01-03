var numIdenticalPairs = function (nums) {
    let indArr = [], result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((nums[i] == nums[j]) && (i < j)) {
                indArr.push(i, j)
                result.push(indArr);
            }
        }
    }
    return result.length;
};

let nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums))