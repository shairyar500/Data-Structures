//Consider the array: [2, 2, 1, 0, 9, 39, 20] . Can you find out how many times 2 occurs in this array and return the count of it?

let arr = [2,2,1,0,9,39,20];

let count = 0;

for(let i=0; i<=arr.length; i++){
    if(arr[i]== 2){
       count= count + 1;
    }
    
    else{
        count=0;
    }
    console.log (count);
}
