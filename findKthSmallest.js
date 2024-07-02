class Node{
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}

let count = 0;

function findKthLargest(node, k){
    if(node){
        let result = findKthLargest(node.right, k);
        if(result) return result;
        count++;
        if(count === k) return node.data
        result = findKthLargest(node.left, k);
        if(result) return result;
    }
    return undefined;
}


const root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(8);
root.right = new Node(15);
root.right.right = new Node(20);
root.right.left = new Node(12);

console.log(findKthLargest(root, 3))