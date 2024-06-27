function findSecondLargest(node){

    if(node.left && !node.left.right && !node.right){
        return node.left.value;
    }

    if(node.right && !node.right.right && !node.right.left){
        return node.value;
    }

    return findSecondLargest(node.right);
}

function findSecondSmallest(node){

    if(node.right && node.right.left && !node.left){
        return node.right.value;
    };
    if(node.left && !node.left.left && !node.left.right){
        return node.value;
    }

    return findSecondSmallest(node.left);
}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(10);
root.left = new Node(6);
root.right = new Node(15);
root.left.right = new Node(8);
root.left.left = new Node(4);
root.right.right = new Node(18);
root.right.left = new Node(12);

let sum = findSecondLargest(root) + findSecondSmallest(root);

console.log(sum)