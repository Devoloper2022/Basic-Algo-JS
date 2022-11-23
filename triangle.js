const triangle = (str, num) => {
    let res = ''
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i + 1; j++) {
            res += str
        }
        res += '\n'
    }
    return res.slice(0, res.length - 1)
}