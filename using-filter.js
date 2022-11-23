const filterShortStateName = (arrStr) => arrStr.filter(str => str.length < 7)
const filterStartVowel = (arrStr) => arrStr.filter(str => str[0] == 'A' || str[0] == 'E' || str[0] == 'I' || str[0] == 'O' || str[0] == 'U')
const filter5Vowels = (arrStr) => arrStr.filter(str => {
    let c = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U' || str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            c += 1
        }
    }
    return c >= 5
})
const filter1DistinctVowel = (arr) => (arr.filter(str => {
    let temp = {}
    for (const find of str.match(/(a)|(e)|(i)|(o)|(u)/gi)) {
        temp[find.toLowerCase()] = find.toLowerCase()
    }
    return Object.getOwnPropertyNames(temp).length == 1
}))
const multiFilter = (arr) => (arr.filter(obj => obj.capital.length >= 8 &&
    !/^[a|e|i|o|u]/i.test(obj.name) &&
    ((obj.tag).match(/[aeiou]/gi) != null && (obj.tag).match(/[aeiou]/gi).length >= 1) &&
    obj.region != 'South'
))