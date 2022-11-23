function indexOf(a,b,t){

    if (t === undefined){
         for (let i = 0; i < a.length; i++) { 
            if (a[i]===b ){
            return i
            }
        }
    }else {
        let count=0
        for (let i = 0; i < a.length; i++) { 
            if (a[i]===b && count===t){
                return i
            }
            if (a[i]===b){
                count++
            }
        }

    }
   

    return -1
}

// function indexOf(a,b,c){

//     return -1
// }

function lastIndexOf(a,b,t){
    if (t === undefined){
        for (let i = a.length-1; i >=0; i--) { 
            if (a[i]===b){
                return i
            }
        }
   }else {
       let count=0
       let index=0
       for (let i = a.length-1; i >=0; i--) { 
           if (a[i]===b && count===t-1){
                return i
            }else if (a[i]===b && count===0){
                index=i 
            } 
            
            if (a[i]===b){
               count++    
            }    
       }

       if(count!==0){
        return index
       }

   }


   

    return -1
}


function includes(a,b){
 
    for (let i = 0; i < a.length; i++) { 
        if (a[i]===b ){
            return true
        }
      
    }

    return false
}

 console.log(lastIndexOf([ 'b', 'a', 't','t'], 't',3))
 console.log(lastIndexOf([ 't','b', 'a', 't'], 't',2))