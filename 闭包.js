var test = (function() {
  var value = 0;
  return function() {
    return value++
  }
}());
for (var i = 0; i < 4; i++) {
  test();
}
console.log('1. ---- ', test())
function test2() {
  var data = [],
    i;
  for (i = 0; i < 4; i++) {
    console.log('2.===', i, data);
    data[i] = function() {
      console.log('3. ---- ', i)
    }
  }
  console.log('4.----', i);
  return data[0]
}
test2()();
