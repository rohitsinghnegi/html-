class Human{
    age;
    #wt=13//private
    ht=17

    //to insalize
    constructor(newAge,newHeight){
        this.age=newAge;
        this.ht=newHeight;
    }

    //behaviour

walking(){
    console.log("i am walking")
}
running(){
    console.log("i am running")
}

get fetchWeight(){ //to access private member and also increasse encapsulation
    return this.#wt;
}
set modifyWeight(val){
    this.#wt = val;
    
}
}
let obj = new Human(50,198);
console.log(obj.ht);
obj.walking();
// 