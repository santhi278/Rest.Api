const express = require("express")
const {getAllProducts,getSingleProduct,addNewProduct,updateProduct,deleteProduct} = require("../controllers/products-controllers")
const router = express.Router()

router.get("/get",getAllProducts)
router.get("/get/:id",getSingleProduct)
router.post("/add",addNewProduct)
router.put("/update/:id",updateProduct)
router.delete("/delete",deleteProduct)
module.exports = router