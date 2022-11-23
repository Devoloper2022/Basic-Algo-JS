function chunk(arr, size) {
    let res = []
    arr.reverse()
    while (arr.length > 0) {
        let sl = []
        let count = 0
        while (count < size) {
            let t = arr.pop()
            if (typeof t === 'undefined') {
                break
            }
            sl.push(t)
            count += 1
        }
        res.push(sl)
    }
    return res
}