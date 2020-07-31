const fib_line = (n, prev) => {
    if (n === 0) {
        prev.val = 1;
        return 0;
    }
    const prevPrev = {};
    prev.val = fib_line(n - 1, prevPrev);
    return prev.val + prevPrev.val;
};

const fib = (n) => {
    let f = 1,
        g = 0;
    while (n-- > 0) {
        g = g + f;
        f = g - f;
    }
    return g;
};

const cache = {};
const fib_memoization = (n) => {
    if (!cache[n]) {
        if (n < 2) {
            cache[n] = n;
        } else {
            cache[n] = fib_memoization(n - 1) + fib_memoization(n - 2);
        }
    }
    return cache[n];
};
// const res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => fib_line(item, {}));
// console.log(res);
// const res1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => fib(item));
// console.log(res1);

// const res2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => fib_memoization(item));
// console.log(res2);

const lcs = (str1, str2) => {
    if (str1.length === 0 || str2.length === 0) return '';
    const array1 = str1.split('');
    const array2 = str2.split('');
    const lastValue1 = array1.splice(-1, 1);
    const lastValue2 = array2.splice(-1, 1);
    if(lastValue1===lastValue2){
        return lcs(array1.join(''),array2.join(''))+lastValue1
    }else{
        console.log(str1,array2.join(''))
        const r=lcs(str1,array2.join(''))
        console.log(r)
        const r1=lcs(array1.join(''),str2)
        return r.length>r1.length?r:r1
    }
};
const str1 = 'dkiudhbvuhd';
const str2 = 'sfdgiudfgu';
lcs(str1, str2);
