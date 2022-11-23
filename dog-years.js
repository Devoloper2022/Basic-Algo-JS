function dogYears(x,d){
    let dy=31557600
    let res=0
    switch(x){
        case 'earth':res+=d/dy
        break
        case 'mercury':res=d/(dy* 0.2408467)
        break
        case 'venus':res=d/(dy*0.61519726)
        break
        case 'mars':res=d/(dy*1.8808158)
        break
        case 'jupiter':res=d/(dy*11.862615)
        break
        case 'saturn':res=d/(dy*29.447498)
        break
        case 'uranus':res=d/(dy*84.016846)
        break
        case 'neptune':res=d/(dy*164.79132)
        break
    }
    return Number((res*7).toFixed(2))
}


console.log(dogYears('earth',1000000000))