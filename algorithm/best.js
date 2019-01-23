/*选择广播可以覆盖到所有的州需要的最少广播台*/
//州
let statesNeeded=new Set(["vf","sd","sf","se","dt","tg"])
//广播台
let stations = {};
stations["kone"]=new Set(["vf","sd","sf"])
stations["ktwo"]=new Set(["sd","se","dt"])
stations["kthree"]=new Set(["sd","sf","se","dt"])
stations["kfour"]=new Set(["se","dt","tg"])
//最终结果存放
let finalStations = new Set();

//计算
while (statesNeeded.size>0){
  let bestStation;
  let statesCovered = new Set();
  for (let station in stations) {
    //获取每个广播台范围的交集
    let covered = new Set([...stations[station]].filter(x => statesNeeded.has(x)));
    if(covered.size > statesCovered.size){
      bestStation = station
      statesCovered = covered
    }
  }
  //去掉已覆盖的州
  statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
  //添加选中的广播台
  finalStations.add(bestStation)
}

console.log(finalStations);
