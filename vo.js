//VO 执行顺序 1.函数参数 2.函数声明（发生命名冲突会覆盖之前的） 3.变量声明（初始值为undefined时，发生命名冲突，会被忽略）
function fun(x, y, z) {
  var func = function() {
    console.log('function');
  };
  var func;
  console.log(func);
}

fun();
//function

function fun(x, y, z) {
  var func = function() {
    console.log('function');
  };
  var func = 1;
  console.log(func);
}

fun();
//1

console.log(x);

var x = 10;
console.log(x); //10
x = 20

function x() {};
console.log(x) //20

if (true) {
  var a = 1
} else {
  var b = true
}

console.log(a) //1
console.log(b) //undefined