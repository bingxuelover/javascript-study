/*KNN*/
const k1 = [2,2]
const k2 = [2,1]
const k3 = [4,5]

let minSum = 0;
function knn(kFirst, kNext){
  let sum = 0
  for (let i = 0; i < kFirst.length; i++) {
    sum += Math.pow((kFirst[i] - kNext[i]), 2)
  }
  let sumSquare = Math.sqrt(sum)
  if(minSum!==0){
    minSum = Math.min(minSum, sumSquare)
  } else {
    minSum = sumSquare
  }
  return minSum
}
knn(k1,k2)
knn(k1,k3)
knn(k2,k3)
console.log('minSum', minSum);

//回归
//选取标本个数
let numSquare = 2
let minArr = [];
function knnRegress(kFirst, kNext){
  let sum = 0
  for (let i = 0; i < kFirst.length; i++) {
    sum += Math.pow((kFirst[i] - kNext[i]), 2)
  }
  let sumSquare = Math.sqrt(sum)
  minArr.push(sumSquare)
  return minArr
}
knnRegress(k2,k3)
knnRegress(k1,k3)
knnRegress(k1,k2)

//最小值
let minNum = Math.min(...minArr)
//从小到达排列
let sortArr = minArr.sort(sortNum)

//取前四个最小值
let minSquareArr = sortArr.splice(0,numSquare)
let squareNum = 0;
minSquareArr.map((item) => {
  squareNum += item
})
let regressNum = squareNum/numSquare

console.log('minNum', minNum);
console.log('regeress number', regressNum);

function sortNum(a,b){
  return a-b
}
