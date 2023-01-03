// Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
    if (s === "") { return 0; }

    var arrString = s.split(''), arrChar = [], arrResult = [];
    for (let i = 0; i < arrString.length; i++) {
        arrChar.push(arrString[i]);
        for (let j = i + 1; j < arrString.length; j++) {
            if ((arrChar.includes(arrString[j]) && (i < j))) {
                break;
            } else {
                arrChar.push(arrString[j]);
            }
        };
        arrResult.push(arrChar);
        arrChar = [];
    }
    var arr = [];
    for (let k = 0; k < arrResult.length; k++) {
        arr.push(arrResult[k].length);
    };
    return Math.max(...arr);
}


let str = "";
console.log(lengthOfLongestSubstring(str));