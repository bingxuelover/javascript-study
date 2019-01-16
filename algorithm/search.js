/* 广度优先搜索 */
/* 散列表存储数据 */
var graph = {}
graph["you"] = ["Alice", "Bob", "Colin", "Sam"]
graph["Alice"] = ["Daniel", "Ellen"]
graph["Bob"] = ["Flank", "Ellen"]
graph["Colin"] = []
graph["Sam"] = []
graph["Daniel"] = []
graph["Flank"] = []
graph["Ellen"] = []
/* 数组存储队列 */
function search(name) {
  var search_quene = []
  search_quene = search_quene.concat(graph[name])
  searched = []
  while (search_quene.length > 0) {
    console.log('search_quene', search_quene);
    console.log('searched', searched);
    person = search_quene.shift()
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(person + ' is mongo seller!');
        return true;
      } else {
        console.log(person + ' is not a seller!');
        search_quene = search_quene.concat(graph[person])
        searched.push(person)
      }
    }
  }
  return false
}
/* 已经判断过的不再进入队列 */
function personIsSeller(name) {
  return (/m$/gi).test(name)
}

search("you")
