// fibonacci number

const fib = (n) => {
    if (n <= 1)
        return n;
    else
        return fib(n - 1) + fib(n - 2);
};

let n = 3; console.log(fib(n))