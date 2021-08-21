function findMatching(drivers, string){ 
    return drivers.filter(driver => driver.toUpperCase()=== string.toUpperCase())
 }
 function fuzzyMatch(drivers, string){
      let newArray = drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0) 
     return newArray
 }
 function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
 }




