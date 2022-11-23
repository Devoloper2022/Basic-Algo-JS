const filter = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}
const reject = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}
const partition = (arr, func) => {
    let truthy = []
    let falsey = []
    let res = [
        truthy,
        falsey
    ]
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            truthy.push(arr[i])
        } else {
            falsey.push(arr[i])
        }
    }
    return res
}