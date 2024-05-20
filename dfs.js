function dfs(graph, startNode){
    let visited = new Set();
    let stack = [startNode];
    let result = [];
    
    visited.add(startNode);
    
    while(stack.length>0){
        let currNode = stack.pop();
        result.push(currNode);
        for(let neighbor of graph[currNode]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
    return result;
 }
 
 let graph = {
     "A" : ["B", "C"],
     "B" : ["A", "C"],
     "C" : ["A", "B", "C"]
 }
 
 console.log(dfs(graph, "A"))