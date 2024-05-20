class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }
    insert(data){
        if(!this.root){
            this.root = new Node(data);
        }else{
            let currNode = this.root;
            while(true){
                if(data<currNode.data){
                    if(!currNode.left){
                        currNode.left = new Node(data);
                        break;
                    }else{
                        currNode = currNode.left;
                    }
                }else if(data>currNode.data){
                    if(!currNode.right){
                        currNode.right = new Node(data);
                        break;
                    }else{
                        currNode = currNode.right;
                    }
                }
            }
        }
    }
    contians(data){
        if(!this.root){
            return false
        }
        let currNode = this.root;
        while(currNode){
            if(data<currNode.data){
                currNode = currNode.left;
            }else if(data>currNode.data){
                currNode = currNode.right;
            }else{
                return true;
            }
        }
        return false;
    }
    remove(data){
        this.root = this.removeHelper(this.root, data);
    }
    removeHelper(node, data){
        if(!node) return null;
        if(data<node.data){
            node.left = this.removeHelper(node.left, data);
            return node;
        }else if(data>node.data){
            node.right = this.removeHelper(node.right, data);
            return node;
        }else{
            if(!node.left && !node.right){
                node = null;
                return null;
            }
            if(!node.left){
                node = node.right;
                return node;
            }else if(!node.right){
                node = node.left;
                return node;
            }

            const minRightNode = this.findMinNode(node.right);
            node.data = minRightNode.data;
            node.right = this.removeHelper(node.right, minRightNode.data);
            return node;
        }
    }
    findMinNode(node){
        if(!node.left){
            return node;
        }else{
            return this.findMinNode(node.left);
        } 
    }

    findClosest(target){
        let currNode = this.root;
        let closest = currNode.data;
        while(currNode){
            if(Math.abs(target - closest)>Math.abs(target - currNode.data)){
                closest = currNode.data;
            }else if(target<currNode.data){
                currNode = currNode.left;
            }else if(target>currNode.data){
                currNode = currNode.right;
            }else{
                break;
            }
        }
        return closest;
    }

    inOrder(){
        this.inOrderHelper(this.root);
    }
    inOrderHelper(node){
        if(node){
            this.inOrderHelper(node.left);
            process.stdout.write(" "+node.data);
            this.inOrderHelper(node.right);
        }
    }

    preOrder(){
        this.preOrderHelper(this.root);
    }
    preOrderHelper(node){
        if(node){
            process.stdout.write(" "+node.data);
            this.preOrderHelper(node.left);
            this.preOrderHelper(node.right);
        }
    }

    postOrder(){
        this.preOrderHelper(this.root);
    }
    postOrderHelper(node){
        if(node){
            this.postOrderHelper(node.left);
            this.postOrderHelper(node.right);
            process.stdout.write(" "+node.data);
        }
    }

    isBst(){
        return this.isBstHelper(this.root, -Infinity, Infinity);
    }

    isBstHelper(node, min, max){
        if(node === null) return true;
        if(node.data<min || node.data>max) return false;
        return (this.isBstHelper(node.left,min,node.data-1), this.isBstHelper(node.right,node.data+1,max));
    }

}


const b = new Bst();
b.insert(10)
b.insert(15)
b.insert(5)
b.insert(12)
b.insert(7)
b.insert(3)
b.insert(4)
b.insert(2)
// console.log(b.findClosest(6))
// console.log(b.contians(10));
// b.remove(10)
// console.log(b.contians(10));
// console.log(b.contians(5));
// console.log(b.contians(12));
// console.log(b.contians(7));
// console.log(b.contians(3));
// console.log(b.contians(4));
// console.log(b.contians(2));
// b.inOrder()
console.log(b.isBst());

