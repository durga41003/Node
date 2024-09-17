const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample data 
let books = [
    { id: 1, title: 'Introduction to Express', author: 'John Doe' },
    { id: 2, title: 'Node.js Basics', author: 'Jane Smith' },
];

// GET method to retrieve all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST method to add a new book
app.post('/books', (req, res) =>{
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

// DELETE method to remove a book by ID
app.delete('/books/:id', (req, res) =>{
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === bookId);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1)[0];
        res.json({ message: 'Book deleted successfully', deletedBook });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
