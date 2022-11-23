const pyramid = (str, num) => {
    var res = ''
    var k = num - 1
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < k; j++) {
            for (let y = 0; y < str.length; y++) {
                res += ' '
            }
        }
        k = k - 1
        for (let j = 0; j < i + 1; j++) {
            res += str
        }
        for (let j = 0; j < num - k - 2; j++) {
            res += str
        }
        res += '\n'
    }
    return res.slice(0, res.length - 1)
}
