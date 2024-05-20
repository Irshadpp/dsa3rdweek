function dfs(graph, startNode, visited = new Set(), result = []){
    visited.add(startNode);
    result.push(startNode);
    
    for(let neighbor of graph[startNode]){
        if(!visited.has(neighbor)){
            dfs(graph, neighbor, visited, result)
        }
    }
    return result;
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

console.log(dfs(graph, "A"))


