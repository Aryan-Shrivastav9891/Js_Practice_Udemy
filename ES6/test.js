// const libraryBooks = [
//     { title: 'Brave New World', author: 'Aldous Huxley' },
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
//   ];
  
// const extractAuthors =(books)=>{
//     if(books.some(book=> !book.author)){
//         console.error("Invalid book object - 'author' property missing")
     //  new Error("Invalid book object - 'author' property missing")
//     }
//     return books.map(book=> book.author)

// }

// console.log(extractAuthors(libraryBooks));

const extractAuthors = (books) => {
    if (books.some((book) => !book.author)) {
      throw new Error("Invalid book object - 'author' property missing");
    }
    return books.map(book => book.author);
  };
   
  // Example usage:
  const libraryBooks = [
    { title: 'Brave New World', author: 'Aldous Huxley' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
  ];
   
  console.log(extractAuthors(libraryBooks)); // ['Aldous Huxley', 'J.D. Salinger']
  