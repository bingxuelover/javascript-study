/*动态规划*/
//将物品放入包内
//物品重量和价值
let sth = {}
sth['gita']=[1,1500]
sth['viedo']=[4,3000]
sth['computer']=[3,2000]
sth['ring']=[0.5,1000]
//包的容量
// let bags = [1,2,3,4]
let bags = [0.5,1,1.5,2,2.5,3,3.5,4]
let bagsConversion = 2
//网格
let sthArr = Object.keys(sth);
let cellB = []
//包的容量做横向坐标
for (let bi = 0; bi < sthArr.length; bi++) {
  //网格增加一行
  cellB.push([])
  //获取物品参数
  let sthParameter = sthArr[bi]
  //物品做竖向坐标
  for (var bj = 0; bj < bags.length; bj++) {
    //单元格的值
    let bagWeight = bags[bj]
    //上一个单元格的值
    let topValue = (bi === 0) ? 0 : cellB[bi-1][bj]
    //重量
    let sthWeight = sth[sthParameter][0]
    //价值
    let topLeftValue = 0
    if(sthWeight <= bagWeight){
      //价值
      let sthValue = sth[sthParameter][1]
      //剩余容量的值
      let lastValue = ((bi === 0) || (bagWeight <= sthWeight)) ? 0 : cellB[bi-1][(bagWeight-sthWeight)*bagsConversion-1]
      topLeftValue = sthValue + lastValue;
    }
    //取最大值
    cellB[bi][bj] = Math.max(topValue, topLeftValue)
  }
}
console.log(cellB);

//最长公共子串
const wordA = 'blue'
const wordB = 'clues'

let cell=[];
for (var i = 0; i < wordA.length; i++) {
  cell.push([]);
  for (var j = 0; j < wordB.length; j++) {
    let wA = wordA[i]
    let wB = wordB[j]
    if(wA === wB){
      let iSet = (i === 0 || j === 0) ? 0 : cell[i-1][j-1]
      cell[i][j] = iSet + 1
    } else {
      cell[i][j] = 0
    }
  }
}
console.log(cell);

//最长公共子序列
let cellL = [];
for (var ii = 0; ii < wordA.length; ii++) {
  cellL.push([])
  for (var jj = 0; jj < wordB.length; jj++) {
    let wLA = wordA[ii]
    let wLB = wordB[jj]
    if(wLA === wLB){
      let ijSet = (ii === 0 || jj === 0) ? 0 : cellL[ii-1][jj-1]
      cellL[ii][jj] = ijSet + 1
    } else {
      let iiSet = (ii === 0) ? 0 : cellL[ii-1][jj]
      let jjSet = (jj === 0) ? 0 : cellL[ii][jj-1]
      cellL[ii][jj] = Math.max(iiSet, jjSet)
    }
  }
}
console.log(cellL);
