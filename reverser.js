function reverse(a){
    let res=[]
    let str=""

    for (let i = a.length-1; i >= 0; i--) { 
        if (typeof a==='string'){
            str+=a[i]
        }else{   
            res.push(a[i])
        }
    }
   
    if (typeof a==='string'){
        return str
    }else{
        return res
    }
    
}
