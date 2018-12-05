/* 二分算法 */
function search(arr, low, high, key) {
  if (low > high) {
    return false;
  }

  var mid = parseInt((high + low) / 2);
  if (arr[mid] === key) {
    return key
  } else if (arr[mid] > key) {
    high = mid - 1
    return search(arr, low, high, key)
  } else if (arr[mid] < key) {
    low = mid + 1
    return search(arr, low, high, key)
  }
  return 'not exit'
}
function binarySearch(arr, key) {
  var low = 0,
    high = arr.length - 1;

  while (low <= high) {
    var mid = parseInt((low + high) / 2),
      guess = arr[mid];
    if (guess === key) {
      return key;
    } else if (guess > key) {
      high = mid - 1;
    } else if (guess < key) {
      low = mid + 1;
    }
  }
  return 'not exist';
}
console.log(search([
  1,
  2,
  3,
  5,
  6,
  8
], 0, 5, 8));
console.log(binarySearch([
  1,
  2,
  3,
  5,
  6,
  8
], 2));
