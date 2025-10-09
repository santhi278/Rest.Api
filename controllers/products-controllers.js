const mongoose = require("mongoose");
const Products = require("../model/products");

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.find();
        res.status(200).json(allProducts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }
        const singleProduct = await Products.findById(productId);
        if (!singleProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(singleProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addNewProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const savedProduct = await Products.create(newProduct);
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }
        const updates = req.body;
        const updatedProduct = await Products.findByIdAndUpdate(productId, updates, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }
        const deletedProduct = await Products.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    addNewProduct,
    updateProduct,
    deleteProduct,
};
