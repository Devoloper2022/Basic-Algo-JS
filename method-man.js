function words(a){
    return a.split(' ')
}

function sentence(a){
    return a.join(' ')
}

function yell(a){
    return a.toUpperCase()
}

function whisper(a){
    return "*"+a.toLowerCase()+"*"
}

function capitalize(a){
    return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
}