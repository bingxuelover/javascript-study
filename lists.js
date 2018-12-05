/* 链式调用 */
function classManager() {}

classManager.prototype.addClass = function(str) {
  console.log(str + ' added');
  return this
}

var manager = new classManager()
manager.addClass('one').addClass('two').addClass('threee')
