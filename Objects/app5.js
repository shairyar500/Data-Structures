//Again consider the above array of objects, and delete one of the objects that represent a book.
// delete at start
for (i = 0; i < books.length; i++){
    books[i] = books [i + 1]
}
books.length = books.length-1;
console.log(books)

// delete at End
books.length = books.length-1;
console.log(books)