var json  = require('./hero.json')

const findAvgNetworth = (arr) =>{
    const Avg = arr.map((item,index)=> item.networth).reduce((a,b)=> a+b)/arr.length
    return Avg
}

const findAvgLevel = (arr) => {
    const intel = arr.filter((obj)=> obj.primary_attribute == 'intelligent')
    const Avg = intel.map((item,index)=> item.level).reduce((a,b)=> a+b)/intel.length
    return Avg
}

const findMostAssist = (arr) => {
    const most = arr.reduce( (a,b)=> {
      return  a.assist > b.assist ? a : b
    })
    return most
}

const findWrostRatio = (arr) =>{
    const wrost = arr.reduce((x,y)=> {
      return (x.kill/x.death) < (y.kill/y.death) ? x : y
    })
    return wrost
}


console.log("Average networth is " + findAvgNetworth(json).toFixed(2))
console.log("Average level intelligent hero is " + findAvgLevel(json).toFixed(2))
console.log("Most assist is " + findMostAssist(json).name)
console.log("Wrost kill/death ratio is " + findWrostRatio(json).name)
