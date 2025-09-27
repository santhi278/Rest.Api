var  express = require("express")
var {getAllProducts,getSingleProducts,addNewProduct,updateProduct,deleteProduct} = require("../controllers/products-controllers")
var router = express.Router()

router.get("/get",getAllProducts)
router.get("/get/:id",getSingleProducts)
router.post("/update/:id",addNewProduct)
router.put("/add",updateProduct)
router.delete("/delete",deleteProduct)
module.exports = router