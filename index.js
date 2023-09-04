// Code your solution here

function findMatching(arrayOfNames, stringName){
  const newArray = arrayOfNames.filter((name)=>{
    if(name.toLowerCase() === stringName.toLowerCase()){
      return name
    }
  })
  return newArray
}
function fuzzyMatch(arrayOfNames, stringName){
  const newArray = arrayOfNames.filter((name)=>{
    let lowerCaseName = name.toLowerCase()
    if(lowerCaseName.slice(0,2) === stringName.toLowerCase()){
      return name
    }
  })
  return newArray
}

function matchName(arrayOfDrivers, driverName){
  const newArray = arrayOfDrivers.filter((driverObj)=>{
    if(driverObj.name.toLowerCase() === driverName.toLowerCase()){
      return driverObj
    }
  })
  return newArray
}