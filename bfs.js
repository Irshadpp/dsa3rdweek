function bfs(graph, startNode){
    let visited = new Set();
    let queue = [startNode];
    let result = [];
    
    visited.add(startNode);
    while(queue.length>0){
        let currNode = queue.shift();
        result.push(currNode);
        for(let neighbor of graph[currNode]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}

const graph = {
    "A" : ["B", "C"],
    "B" : ["A", "C"],
    "C" : ["A", "B"]
}
console.log(bfs(graph,"A"))