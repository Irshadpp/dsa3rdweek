class Node{
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}


let count = 0;
function findKthSmallest(node, k){
    if(node){
        let result = findKthSmallest(node.left, k);
        if(result) return result;
        count++;
        if(k === count) return node.data;
        result = findKthSmallest(node.right, k);
        if(result) return result;
    }
    return undefined;
}


const root = new Node(10);
root.left = new Node(5);
root.left.right = new Node(8);
root.left.left = new Node(3);
root.right = new Node(20);
root.right.right = new Node(25);
root.right.left = new Node(15);


console.log(findKthSmallest(root, 1));