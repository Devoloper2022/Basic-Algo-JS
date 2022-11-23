const adder = (arrNum, initVal = 0) => arrNum.reduce((prev, cur) => prev + cur, initVal)
const sumOrMul = (arrNum, initVal = 0) => arrNum.reduce((prev, cur) => cur % 2 == 0 ? prev * cur : prev + cur, initVal)
const funcExec = (arrFunc, initVal = 0) => arrFunc.reduce((prev, cur) => cur(prev), initVal)