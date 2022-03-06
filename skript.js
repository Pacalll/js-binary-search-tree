function Node(key, value){
    this.key = key;
    this.value = value;
    this.left;

    this.ausgabe = function(){
        alert(this.key +" "+this.value);
    }
}