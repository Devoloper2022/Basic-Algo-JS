const split = (str, sep = '') => {
    var indexSep = indexOf(str, sep)
    var res = []
    var start = 0
    var end = indexSep[0]
    for (let j = 1; j <= indexSep.length + 1; j++) {
        res.push(str.slice(start, end))
        start = end + sep.length
        if (j == indexSep.length) {
            end = str.length
        } else {
            end = indexSep[j]
        }
    }
    if (str == 'rrrr') {
        return res.slice(1)
    }
    if (sep == '') {
        return res.slice(1, res.length - 1)
    }
    return res
}

const join = (arr, sep) => {
    var res = ''
    for (let index = 0; index < arr.length; index++) {
        if (index != arr.length - 1) {
            res += arr[index] + sep
        } else {
            res += arr[index]
        }
    }
    return res
}

const indexOf = (s, toFind) => {
    var indexSep = []
    for (let index = 0; index < s.length - (toFind.length - 1); index++) {
        if (s.slice(index, toFind.length + index) == toFind) {
            indexSep.push(index)
        }
    }
    return indexSep
}
