//find palindrome of any number

var x = 10;
var palindrome = (x) => {
    if (x > 0) {
        var val = x;
        var m = 0;
        while (x) {
            var n = x % 10;
            x = Math.floor(x / 10);
            m = m * 10 + n;
        }

        if (m == val) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(palindrome(x));
