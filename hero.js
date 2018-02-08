const json  = require('./hero.json')

const findAvgNetworth = (arr) =>{
    const Avg = arr.map((item)=> item.networth)
    let res=0;
    for(i=0;i<Avg.length;i++){
        res += Avg[i]
    }
    return res/arr.length
}

const findAvgLevel = (arr) => {
    const intel = arr.filter((obj)=> obj.primary_attribute == 'intelligent')
    const Avg = intel.map((item)=> item.level)
    let res = 0
    for(i=0;i<intel.length;i++){
        res += Avg[i]
    }
    return res/intel.length
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


console.log("Average networth is " + findAvgNetworth(json))
console.log("Average level intelligent hero is " + findAvgLevel(json))
console.log("Most assist is " + findMostAssist(json).name)
console.log("Wrost kill/death ratio is " + findWrostRatio(json).name)
