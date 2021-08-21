function findMatching(drivers, string){ 
    return drivers.filter(driver => driver.toUpperCase()=== string.toUpperCase())
 }
 function fuzzyMatch(drivers, string){
     return drivers.filter(driver => driver.match() === string.match())

 }


