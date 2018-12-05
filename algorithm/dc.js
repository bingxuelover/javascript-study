/* 求和 */
function sum(arr, num) {
  var len = arr.length

  if (len <= 1) {
    return arr[0] + num
  } else {
    var pop = num + arr.pop()
    return sum(arr, pop)
  }
}

console.log(sum([
  1, 2, 3, 4
], 0));

/* 获取总个数 */
function total(obj, all) {
  var len = obj.length;
  if (len <= 1) {
    return all + 1
  } else {
    obj.pop()
    return total(obj, (all + 1))
  }
}
console.log(total([
  2, 3, 5, 1, 2
], 0));

/* 最大数 */
function maxNum(arr, max) {
  var len = arr.length;
  if (len <= 1) {
    if (arr[0] >= max) {
      return arr[0]
    }
    return max
  } else if (arr[0] <= max) {
    arr.shift()
    return maxNum(arr, max)
  } else if (arr[0] > max) {
    max = arr[0]
    arr.shift()
    return maxNum(arr, max)
  }
}

console.log(maxNum([
  0, 12, 6, 9
], 0));
