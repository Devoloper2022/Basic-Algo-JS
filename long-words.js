const longWords = arr => arr.every(str => str.length >= 5)
const oneLongWord = arr => arr.some(elem => elem.length >= 10)
const noLongWords = arr => arr.every(elem => elem.length < 7)