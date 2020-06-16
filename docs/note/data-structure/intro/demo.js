const fib_line = (n, prev) => {
    if (n === 0) {
        prev.val = 1;
        return 0;
    }
    const prevPrev = {};
    prev.val = fib_line(n - 1, prevPrev);
    return prev.val + prevPrev.val;
};

const fib = n => {
    let f = 1,
        g = 0;
    while (n-- > 0) {
        g = g + f;
        f = g - f;
    }
    return g;
};
const res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => fib_line(item, {}));
console.log(res);
const res1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => fib(item));
console.log(res1);
