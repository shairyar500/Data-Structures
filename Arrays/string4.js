//Suppose you are attempting an assessment of a tech company. In the assessment, they have given you a sequence [2, 3, 0, 1, 4, 6, 7, 7]. They want you to replace 2 with 200 in the given sequence. How would you do that?

let array2 = [2, 3, 0, 1, 4, 6, 7, 7];
array2.splice(0, 1 , 200);
console.log(array2);