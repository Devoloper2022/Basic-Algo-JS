function citiesOnly(arrObj){
    return arrObj.map(obj=> obj['city'])
}


const upperCasingStates=(arrStr) => arrStr.map(str=>{
    let arr=str.split(" ")
    let res=""

    for (let i=0;i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
        res+=arr[i]+" "
    }

    return res.slice(0,res.length-1)
})


const fahrenheitToCelsius=(arrF) =>arrF.map(F =>Math.floor((parseInt(F.slice(0,-2))-32)*0.5556)+"°C")

const trimTemp=(arrObj)=> arrObj.map(obj=>{
    // obj['temperature']=obj['temperature'].replaceAll(' ','')
    let t = obj['temperature']
    let res = ''
    for (let i = 0; i < t.length; i++) {
        if (t[i] != ' ') {
            res += t[i]
        }
    }
    obj['temperature'] = res
    return obj
})

const tempForecasts=(arrObj) => trimTemp(arrObj).map(obj=>{
    let t=Math.floor((parseInt(obj['temperature'].slice(0,-2))-32)*0.5556)+"°C"
    let state=upperCasingStates([obj['state']])
    return t+'elsius in '+obj['city']+', '+state
}) 

// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },])) // -> ['Los Angeles', 'San Francisco']

//     console.log( upperCasingStates(['alabama', 'new jersey']) )// -> ['Alabama', 'New Jersey']

//     console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']) )// -> ['20°C', '15°C', '-4°C']


//     console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]) )/* -> [
//     { city: 'Los Angeles', temperature: '101°F' },
//     { city: 'San Francisco', temperature: '84°F' },
//   ] */
  

  console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california asd',
    region: 'West',
  },
]) )// -> ['38°Celsius in Pasadena, California']
