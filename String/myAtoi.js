var myAtoi = function (s) {
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], numArr = [];
    let arr = s.split("");
    for (let m = 0; m < arr.length;) {
        if (arr[m] == " " || arr[m] == ".") {
            arr.splice(m, 1);
        } else {
            m++;
        }
    };

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] == '-' || arr[i] == '+' || arr[i] == "")) {
            if (arr[i] == '-') {
                numArr.push(arr[i]);
            }
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (num.includes(arr[j])) {
            numArr.push(arr[j])
        };
    }
    return numArr.join().replace(/,/g, "");;
};

let s = "words and -987";
console.log(myAtoi(s));