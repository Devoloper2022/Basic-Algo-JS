function multiply(a,b){
    let res =0
    let chb=false

    if (b<0){
        chb=true
        b=Math.abs(b)
    }

    for (let i = 0; i < b; i++) { 
        res+=a
    }

    if(chb){ 
        return -res
    }

    return res 
}

function divide(a,b){
    let c=0
    let res=0
    let cha=false
    let chb=false
    if (a<0){
        cha=true
        a=Math.abs(a)
    }

    if (b<0){
        chb=true
        b=Math.abs(b)
    }


    while(a>=res+b){
        res+=b
        c++
    }

    if((cha && chb)||(!cha && !chb)){ 
        return c
    }
    return -c
}

function modulo(a,b){
    let res=0
    let ch=false
    if (a<0){
        ch=true
        a=Math.abs(a)
    }
    
    if (b<0){
    
        b=Math.abs(b)
    }


    while(a>=res+b){
        res+=b
       
    }

    if(ch){ 
        return -(a-res)
    }
    return a-res
}

// console.log(divide(123, -22))
// console.log(modulo(123, -22))
// // console.log(divide(17,3 ))
// // console.log(modulo(3,6 ))
// console.log(-123%-22)


