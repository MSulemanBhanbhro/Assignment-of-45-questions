/* 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
// Define TypeScript objects for books
var books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];
// Print information about each book
console.log("Books:");
books.forEach(function (book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Year: ").concat(book.year));
});
