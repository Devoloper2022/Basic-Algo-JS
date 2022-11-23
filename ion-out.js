function ionOut(str) {
    const reg = /[^\W]*?tion/gi
    let arr = str.match(reg)
    if (arr == null) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, arr[i].length - 3)
    }
    return arr
}