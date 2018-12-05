/* 选择排序 */
function findSmall(arr) {
  var smallA = arr[0],
    smallI = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallA) {
      smallA = arr[i]
      smallI = i
    }
  }
  return smallI;
}

function selectionSort(arr) {
  var newArr = [];
  var len = arr.length;
  while (len > 0) {
    var smallI = findSmall(arr);
    var smallA = arr.splice(smallI, 1);
    len -= 1;
    newArr = newArr.concat(smallA)
  }
  return newArr;
}
