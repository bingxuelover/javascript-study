/* 迪克斯特拉算法 */
//领居节点
let graph = {}
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['fin'] = 5
graph['fin'] = {}
//开销
let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = 100000
//父节点
let parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = ''
//记录处理过的节点
let processed = []
function getCosts(costs) {
    let node = findLowestCostNode(costs)
    while (node !== "") {
        cost = costs[node]
        neighbors = graph[node]
        for (var n in neighbors) {
            newCost = cost + neighbors[n]
            if (costs[n] > newCost) {
                costs[n] = newCost
                parents[n] = node
            }
        }
        processed.push(node)
        node = findLowestCostNode(costs)
    }
    return 'lowestCosts:' + costs['fin'];
}
function findLowestCostNode(costs) {
    lowestCosts = 1000000
    lowsetCostNode = ""
    for (var node in costs) {
        cost = costs[node]
        if (cost < lowestCosts && processed.indexOf(node) === -1) {
            lowestCosts = cost
            lowsetCostNode = node
        }
    }
    return lowsetCostNode
}
console.log(getCosts(costs));