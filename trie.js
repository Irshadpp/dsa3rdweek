// class TrieNode{
//     constructor(){
//         this.children = {};
//         this.isEnd = false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode();
//     }
//     insert(str){
//         let node = this.root;
//         for(let char of str){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEnd = true;
//     }
//     search(str){
//         let node = this.root;
//         for(let char of str){
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.isEnd;
//     }
//     startWith(prefix){
//         let node = this.root;
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
//     findWordsWithPrefix(prefix){
//         let node = this.root;
//         let result = [];
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return result;
//             }
//             node = node.children[char]
//         }
//         this.collectWords(node, result, prefix);
//         return result;
//     }
//     collectWords(node, result, prefix){
//         if(node.isEnd){
//             result.push(prefix);
//         }
//         for(let char in node.children){
//            this.collectWords(node.children[char], result, prefix + char)
//         }
//     }
// }

// const t = new Trie();
// t.insert("apple");
// t.insert("app");
// t.insert("application")
// console.log(t.search("app"))
// console.log(t.startWith("ap"))
// console.log(t.findWordsWithPrefix("app"))


class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}
 
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(str){
        let node = this.root;
        for(let char of str){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }
    search(str){
        let node = this.root;
        for(let char of str){
            if(!node.children[char]){
                return false;
            }
            node = node.children[char];
        }
       return node.isEnd;
    }
    searchWithPrefix(prefix){
        let node = this.root;
        let result = [];
        for(let char of prefix){
            if(!node.children[char]){
                return result;
            }
            node = node.children[char]
        }
        this.collectWrods(node,result,prefix);
        return result
    }
    collectWrods(node, result, prefix){
        if(node.isEnd){
            result.push(prefix);
        };
        for(let char in node.children){
             this.collectWrods(node.children[char], result, prefix + char)
        }
    }
}

const t = new Trie();
t.insert('hello');
t.insert('hey');
t.insert('heey');
console.log(t)
console.log(t.searchWithPrefix('he'));