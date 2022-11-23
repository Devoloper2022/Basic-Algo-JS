const map = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i], i, arr))
    }
    return res
}
const flatMap = (arr, func) => flat(map(arr, func))
const flat = (arr, d = arr.length) => {
    if (d == 0) {
        return arr
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            let t = flat(arr[i], d - 1)
            for (let j = 0; j < t.length; j++) {
                res.push(t[j])
            }
        } else {
            res.push(arr[i])
        }
    }
    return res
}