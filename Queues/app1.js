class Queue {
    constructor(){
        this.items = ["ayesha","ali","nimra"];
    }
// for initailization and printing
    printQueue() {
        for(let i = 0; i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }
    // for size
    size() {
        this.size = this.items.length;
       console.log(this.size);
    }
}
// calling functions
let myQueue = new Queue();
myQueue.printQueue();
myQueue.size();