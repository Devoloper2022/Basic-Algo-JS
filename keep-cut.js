function cutFirst(a){
    let ans=''

    for (let i = 2; i <a.length; i++) {
        ans+=a[i]
    }

    return ans
    
}


function cutLast(a){
    let ans=''
    
    for (let i = 0; i <a.length-2; i++) {
        ans+=a[i]
    }

    return ans
}

function cutFirstLast(a){
    let ans=''
    
    for (let i = 2; i <a.length-2; i++) {
        ans+=a[i]
    }

    return ans
}


function keepFirst(a){
    let ans=""
    if (a.length>0)ans+=a[0]
    if (a.length>1)ans+=a[1]

    return ans
}

function keepLast(a){
    let ans=""

    if (a.length>1)ans+=a[a.length-2]
    if (a.length>0)ans+=a[a.length-1]

    
    return ans
}


function keepFirstLast(a){
    let ans=""
    if( a.length<5){
        return a
    }else {
        ans+=a[0]+a[1]+a[a.length-2]+a[a.length-1]
    }
    return ans
}

console.log(keepLast('a'))