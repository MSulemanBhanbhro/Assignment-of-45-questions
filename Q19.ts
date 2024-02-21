/* 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

// Define TypeScript objects for books
const books: { title: string, author: string, year: number }[] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

// Print information about each book
console.log("Books:");
books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
});
