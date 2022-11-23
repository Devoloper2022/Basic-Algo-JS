function round(num) {
    if (num == 0) {
        return num
    }
    if ((mod((num * 10), 10)) >= 5 || (mod((num * 10), 10)) <= -5) {
        if (num < 0) {
            return (num * 10 - mod((num * 10), 10)) / 10 - 1
        }
        return (num * 10 - mod((num * 10), 10)) / 10 + 1
    } else if ((mod((num * 10), 10)) != 0) {
        return (num * 10 - mod((num * 10), 10)) / 10
    }
    return num
}

function ceil(num) {
    if (num == 0) {
        return num
    }
    if (mod((num * 10), 10) != 0) {
        if (num < 0) {
            return (num * 10 - mod((num * 10), 10)) / 10
        }
        return (num * 10 - mod((num * 10), 10)) / 10 + 1
    }
    return num
}


function floor(num) {
    if (num == 0) {
        return num
    }
    if (mod((num * 10), 10) != 0) {
        if (num < 0) {
            return (num * 10 - mod((num * 10), 10)) / 10 - 1
        }
        return (num * 10 - mod((num * 10), 10)) / 10
    }
    return num
}


function trunc(num) {
    var res = parse(mod(num, 10000))
    var res2 = parse(num / 10000)
    return res2 * 10000 + res
}

function parse(num) {
    return num ^ 0
}

function mod(a, b) {
    let is = 1
    if (a < 0) {
        is = -is
        a = -a
    }
    while (a >= b) {
        a -= b
    }
    if (is < 0) {
        return -a
    }
    return a
}

// function round(num) {
//     if (num < 0.0) {
//         num -= 0.5;
//         return num + (modulo(num, 1.0));
//     } else {
//         num += 0.5;
//         return num - (modulo(num, 1.0));
//     }
// }

// function floor(num) {
//     if (num < 0.0) {
//         return num - (1 - modulo(num, 1.0));
//     }
//     return num - (modulo(num, 1.0));
// }

// function ceil(num) {
//     let d = modulo(num, 1.0);
//     if (num < 0.0) {
//         return num + d;
//     }
//     if (d != 0) {
//         return num + (1 - d);
//     }
//     return num - d;
// }

// function trunc(num) {
//     if (num < 0.0) {
//         return ceil(num);
//     }
//     return floor(num);
// }

// function modulo(num, divisor) {
//     if (divisor < 0) divisor = -divisor;
//     if (num < 0) num = -num;

//     let i = 1;
//     let product = 0;
//     while (product <= num) {
//         product = divisor * i;
//         i++;
//     }

//     return num - (product - divisor);
// }
