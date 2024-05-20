function riverLength(matrix){
    // let visited = [
    //     [false],[false],[false],[false],[false],
    //     [false],[false],[false],[false],[false],
    //     [false],[false],[false],[false],[false],
    //     [false],[false],[false],[false],[false],
    //     [false],[false],[false],[false],[false],
    // ];
    let visited = Array(matrix.length).fill().map(()=> Array(matrix.length).fill(false))
    let size = [];
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(visited[i][j]){
                continue;
            }else{
                traverse(i, j, matrix, visited, size)
            }
        }
    }
    return size;
}

function traverse(i, j, matrix, visited, size){
    let riverCount = 0;
    let stack = [];
    stack.push([i,j]);
    while(stack.length>0){
        let currNode = stack.pop();
        let i = currNode[0];
        let j = currNode[1];
        if(visited[i][j]){
            continue;
        }
        visited[i][j] = true;
        if(matrix[i][j] === 0){
            continue;
        }
        riverCount++;
        let nearest = getNearest(i, j, matrix, visited);
        stack.push(...nearest);
    }
    if(matrix[i][j] !== 0){
        size.push(riverCount);
    }
}

function getNearest(i, j, matrix, visited){
    let nearestNodes = [];
    if(i>0 && !visited[i-1][j]){
        nearestNodes.push([i-1,j]);
    }
    if(i<matrix.length-1 && !visited[i+1][j]){
        nearestNodes.push([i+1,j]);
    }
    if(j>0 && !visited[i][j-1]){
        nearestNodes.push([i,j-1]);
    }
    if(j<matrix[i].length-1 && !visited[i][j+1]){
        nearestNodes.push([i,j+1]);
    }
    return nearestNodes;
}

let arr = [
    [1,0,0,0,1],
    [0,0,0,1,1],
    [0,0,1,1,1],
    [0,0,0,0,1],
    [1,1,0,0,0]
]

console.log(riverLength(arr))