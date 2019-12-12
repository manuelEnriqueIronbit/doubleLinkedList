class Node {
    constructor (data){
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}
class DoubleLinkedList {
    constructor(){
        this.list = new Set();
        this.currentNode = null;
    }
    add(data, prev = null, next = null) {
        const node = new Node(data);
        node.prev = prev;
        node.next = next;
        if (prev !== null ){
            prev.next = node;
        }
        if (next !== null){
            next.prev = node;
        }
        this.currentNode = this.currentNode === null ? node : this.currentNode;
        this.list.add(node);
    }
    prev(){
        this.currentNode = this.currentNode.prev !== null ? this.currentNode.prev : this.currentNode;
    }
    next(){
        this.currentNode = this.currentNode.next !== null ? this.currentNode.next : this.currentNode;
    }
    
    remove(element){
        const listArray = [...this.list];
        for(const iterator of listArray){
            if (Object.values(iterator.data).join('') === element){
                let prev = iterator.prev;
                let next = iterator.next;
                prev.next = next;
                next.prev = prev;
                this.list.delete(iterator);
            }
        }
    }
}

let list = new DoubleLinkedList;
list.add({'name' : 'Manuel'})
list.add({'name' : 'Luis'},list.currentNode)
list.next();
list.add({'name' : 'Edgar'},list.currentNode)
console.log(list);
list.remove()