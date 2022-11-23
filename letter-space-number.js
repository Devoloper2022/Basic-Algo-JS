const letterSpaceNumber = (str) => {
    let arr = str.concat(' ').match(/\w\s\d\W/g)
    // console.log(arr)
    if (arr == null) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i].length > 3) {
            arr[i] = arr[i].slice(0, arr[i].length - 1)
        }
    }
    return arr
}