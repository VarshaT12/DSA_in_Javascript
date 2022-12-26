// power of two

const isPowerOfTwo = (n) => {
    if (n == 0) return false;
    return ((n == 1) || (n % 2 == 0 && isPowerOfTwo(n / 2)));
};

let n = 26;
console.log(isPowerOfTwo(n));