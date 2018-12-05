/* 快速排序 */
/* 中间元素作为基线，更适用于有顺序的 */
function quickSort(array) {
  var len = array.length;
  if (len < 2) {
    return array
  } else {
    var j = parseInt((len + 1) / 2);
    var arr = array[j];
    var less = [];
    var greater = [];
    array.forEach(function(i, index) {
      if (index !== j) {
        if (i <= arr) {
          less.push(i)
        } else if (i > arr) {
          greater.push(i)
        }
      }
    })
    return quickSort(less).concat([arr], quickSort(greater))
  }
}

/* 第一个元素作为基线 */
function quickSort2(array) {
  var len = array.length;
  if (len < 2) {
    return array
  } else {
    var arr = array[0];
    var less = [];
    var greater = [];
    array.forEach(function(i, index) {
      if (index > 0) {
        if (i <= arr) {
          less.push(i)
        } else if (i > arr) {
          greater.push(i)
        }
      }
    })
    return quickSort2(less).concat([arr], quickSort2(greater))
  }
}

console.log(quickSort2([8, 9, 23, 6, 3]));
console.log(quickSort2([1, 2, 3, 4, 5]));
