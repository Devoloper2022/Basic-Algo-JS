const sameAmount = (str, reg1, reg2) => {
    var str1 = str
    var str2 = str
    var c1 = 0
    var c2 = 0
    while (true) {
        var arr1 = str1.match(reg1)
        var arr2 = str2.match(reg2)
        if (arr1 != null) {
            c1 += 1
        }
        if (arr2 != null) {
            c2 += 1
        }
        str1 = str1.replace(reg1, '$1.')
        str2 = str2.replace(reg2, '$1.')
        if (arr1 == null && arr2 == null) {
            break
        }
    }
    return c1 == c2
}