function slice(array, start, end){
    const resArr=new Array()
    let index=0
    let s=start
    let e=end
    let ans=""
   
    if (start===undefined){
        s=0    
    }else if (start>array.length){
        return resArr
    }else if (start<0) {
        s=array.length+start
    }


    if (end===undefined || end>array.length){
        e=array.length      
    }else if(end<0){
        e=array.length+end
    }

    for (let i = s; i <e; i++) { 
        if (typeof array ==='string'){
            ans+=array[i]
            console.log(array[i])
        }else{
            resArr[index]=array[i]
            index++
        }
            
    }
    
    if (typeof array ==='string'){
        return ans
    }else{
        return resArr
    }
}

//  console.log(slice([1,2,2,3,4,5,9,8], 2))
// // console.log(slice("adjnfajs", 2))