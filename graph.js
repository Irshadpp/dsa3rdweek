class Graph{
    constructor(){
        this.adjecencyList = new Map();
    }
    addVertex(data){
        if(!this.adjecencyList.has(data)){
            this.adjecencyList.set(data, new Set());
        }
    }
    insert(vertex, edge, isBidirectional){
        if(!this.adjecencyList.has(vertex)){
            this.addVertex(vertex);
        }
        if(!this.adjecencyList.has(edge)){
            this.addVertex(edge);
        }
        let vertex1 = this.adjecencyList.get(vertex);
        vertex1.add(edge)
        if(isBidirectional){
             let vertex2 = this.adjecencyList.get(edge);
             vertex2.add(vertex);
        }
    }
    display(){
        for(let [vertex, edges] of this.adjecencyList){
            console.log(`${vertex} => ${Array.from(edges)}`);
        }
    }
    checkConnection(vertex1, vertex2){
        let v1Check = 0;
        let v2Check = 0;
        for(let neighbor of this.adjecencyList){
            if(vertex1 === neighbor){
                v1Check = 1;
            } 
            if(vertex2 === neighbor){
                v2Check = 1;
            }
        }
        return v1Check 
    }
}

const g = new Graph();
g.insert(10,1,true);
g.insert(10,2,true);
g.insert(10,3,true);
g.insert(3,15, false)
g.display()