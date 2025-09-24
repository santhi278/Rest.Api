var express = require("express")
var {getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook} = require("../controllers/BK-controllers")
var router = express.Router()
router.get("/get",getAllBooks)
router.get("/get/:id",getSingleBook)
router.post("/add",addNewBook)
router.put("/update/:id",updateBook)
router.delete("/delete/:id",deleteBook)
module.exports = {
    routes : router
}