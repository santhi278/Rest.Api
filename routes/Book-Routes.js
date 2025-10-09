const express = require("express")
const {getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook} = require("../controllers/BK-controllers")
const router = express.Router()
router.get("/get",getAllBooks)
router.get("/get/:id",getSingleBook)
router.post("/add",addNewBook)
router.put("/update/:id",updateBook)
router.delete("/delete/:id",deleteBook)
module.exports = {
    routes : router
}