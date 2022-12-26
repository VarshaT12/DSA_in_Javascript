var fourSum = function (nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length - 1; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if ((nums[i] + nums[j] + nums[k] + nums[l]) == target) {
                        arr.push([nums[i], nums[j], nums[k], nums[l]]);
                    }
                }
            }
        }
    }

    for (let p = 0; p < arr.length; p++) {
        const compare = function (a, b) {
            return a - b;
        }
        arr[p].sort(compare);
    }
    arr.sort();
    for (let m = 0; m < arr.length - 1;) {
        if (JSON.stringify(arr[m]) == JSON.stringify(arr[m + 1])) {
            arr.splice(m, 1);
        } else {
            m++;

        }
    }

    return arr;
};


let n = [2, 2, 2, 2, 2];
let t = 8;
console.log(fourSum(n, t));