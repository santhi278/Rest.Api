const mongoose = require("mongoose");
const Book = require("../model/book");

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();
        res.status(200).json(allBooks);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid book ID" });
        }
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

const addNewBook = async (req, res) => {
    try {
        const bookData = req.body;
        const newBook = await Book.create(bookData);
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: "Error creating book", error: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid book ID" });
        }
        const updateData = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: "Error updating book", error: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid book ID" });
        }
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting book", error: err.message });
    }
};

module.exports = {
    getAllBooks,
    getSingleBook,
    addNewBook,
    updateBook,
    deleteBook,
};
