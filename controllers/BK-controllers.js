
const book = require("../model/book"); 

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await book.find();
        res.status(200).json(allBooks);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
const getSingleBook = async (req, res) => {
    try {
        const id = req.params.id;
        const singleBook = await book.findById(id);

        if (singleBook) {
            res.status(200).json(singleBook);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


const addNewBook = async (req, res) => {
    try {
        const newFormFile = req.body;
        const newBook = await book.create(newFormFile);

        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: "Error creating book", error: err.message });
    }
};
const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        const updatedBook = await book.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });

        if (updatedBook) {
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error updating book", error: err.message });
    }
};
const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedBook = await book.findByIdAndDelete(id);

        if (deletedBook) {
            res.status(200).json({ message: "Book deleted successfully" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
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
