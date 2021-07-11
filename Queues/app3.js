class Queue {
    constructor(){
        this.items = [];
        this.size = 5;
    }
    enqueue(item) {
        // this.items.push(item);
        if(this.items.length+1 > this.size){
            console.log('overflow');
            }
        else{
            this.items.push(item);
            }
        }
    dequeue() {
        // this.items.shift();
        if(this.items.length==0){
            console.log("underflow");
        }
        else{
            this.items.shift();
        } 
    }
isEmpty() {
         if (this.items.length == 0){

             console.log("true");
         }else{
             console.log("false");
     }
     }
isFull() {
    if (this.items.length == this.size) {
        console.log("true");
    }else{
        console.log("false");
    }
}
}   
 
let myQueue = new Queue();

myQueue.isEmpty();
myQueue.enqueue("Sher");
myQueue.isFull();