const isValid = (date) => !(isNaN(date) || date == 0)



function isAfter(date1,date2){
    if(isValid(date1) && isValid(date2)&&date1>=date2)return true 
    return false
} 
function isBefore(date1,date2){
    if(isValid(date1) && isValid(date2)&&date1<=date2)return true 
    return false
} 
function isFuture(date){
    if(isValid(date) &&  Date.now()<date)return true 
    return false
}  


function isPast(date){
    if(isValid(date) && Date.now()>date)return true 
    return false
}  
