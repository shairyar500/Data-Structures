//Take the above array of objects and add a book of your choice to it with the same properties.

// At Start
books.length = books.length+1;
for (let i = books.length-1; i > 0; i--){
    books[i]= books[i - 1];
}
books[0] ={name:"coding", topic: "code"}
console.log(books);

// At End
books.length = books.length+1;
books[books.length-1]= {name: 'Web Development', 
topics: ['Objects']}
console.log(books);