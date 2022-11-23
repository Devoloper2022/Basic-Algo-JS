const DNA = (str) => {
    var res = ''
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element == 'C') {
            res += 'G'
        } else if (element == 'G') {
            res += 'C'
        } else if (element == 'A') {
            res += 'T'
        } else if (element == 'U') {
            res += 'A'
        } else {
            res += element
        }
    }
    return res
}
const RNA = (str) => {
    var res = ''
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element == 'G') {
            res += 'C'
        } else if (element == 'C') {
            res += 'G'
        } else if (element == 'T') {
            res += 'A'
        } else if (element == 'A') {
            res += 'U'
        } else {
            res += element
        }
    }
    return res
}
