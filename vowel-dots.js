let vowels = /(a|e|i|o|u|A|E|I|O|U)/g
function vowelDots(str) {
    return str.replace(vowels, '$1.')
    // return str.replace(vowels, '.')
}