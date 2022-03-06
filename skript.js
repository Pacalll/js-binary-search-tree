function createNewNode(key, value){
    this.key = key;
    this.value = value;

    this.ausgabe = function(){
        alert(this.key +" "+this.value);
    }
}

var Node1 = new createNewNode("2", "test");