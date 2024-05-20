class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function displayPrime(node){
    displayPrimeHelper(node);
}

function displayPrimeHelper(node){
    if(node){
        let flag = 0;
        for(let i=2; i<node.data; i++){
            if(node.data%i === 0){
                flag = 1;
            }
        }
        if(flag === 0){
            console.log(node.data);
        }
        displayPrimeHelper(node.left);
        displayPrimeHelper(node.right);
    }
}

function isBst(node){
    return bstHelper(node, -Infinity, Infinity);
}

function bstHelper(node, min, max){
    if(!node) return true;
    if(node.data<min || node.data>max) return false;
    return (bstHelper(node.left, min, node.data-1) && bstHelper(node.right, node.data+1, max));
}

const Tree = new TreeNode(10);
Tree.left = new TreeNode(8);
Tree.right = new TreeNode(15);
Tree.left.left = new TreeNode(5);
Tree.left.right = new TreeNode(13);
Tree.right.left = new TreeNode(11);
Tree.right.right = new TreeNode(20);

displayPrime(Tree)
// console.log(isBst(Tree))