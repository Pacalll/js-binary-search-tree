class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    get getleft(){
        return this.left;
    }
    get getright(){
        return this.right;
    }
    get getKey(){
        return this.key;
    }
}