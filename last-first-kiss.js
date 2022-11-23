function first(p){
    return p[0]
}

function last(p){
    return p[p.length-1]
}

function kiss(p){
    let a=first(p)
    let b=last(p)
    return [b,a]
}