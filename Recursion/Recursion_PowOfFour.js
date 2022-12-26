var isPowerOfFour = function (n) {
    if (n == 0) return false;
    return ((n == 1) || (n % 4 == 0 && isPowerOfFour(n / 4)));
};

let n = 17;
console.log(isPowerOfFour(n))