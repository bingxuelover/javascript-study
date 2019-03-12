const arr1 = [1,2,3,4,5];
let arr2 = arr1.map((item) => {
  return item*2
})
console.log('arr2:',arr2);
//arr2: [ 2, 4, 6, 8, 10 ]

let arr3 = 0;
arr1.map((item) => {
  arr3+=item
})
console.log(arr3);
//15
