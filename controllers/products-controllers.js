const products = require("../model/products")
var Products = require("../model/products")
const { get } = require("../routes/Products-Routes")

var getAllProducts = async(req,res)=>{
    var myProducts = await products.find()
    res.status(200).json(myProducts)
}
var getSingleProducts = async(req,res)=>{
    var productId =  req.params.id
    var singleProduct = await productId.findById(productId)
    res.status(201).json(singleProduct)
}
var addNewProduct = async(req,res)=>{
    var newProduct = req.body
    var newPro = await Products.create(newProduct)
    res.status(201).json(newPro)
}
var updateProduct = async(req,res)=>{
    var update = req.body
    var id = req.params.id
    var updateMyProduct = await products.findByIdAndUpdate(id,update)
    res.status(201).json(updateMyProduct)
}
var deleteProduct = async(req,res)=>{
    var deleteId = req.params.id
    var deleteProduct = products.findByIdAndDelete(deleteId)
    res.status(200).json(deleteProduct)
}
module.exports = {
    getAllProducts,getSingleProducts,addNewProduct,updateProduct,deleteProduct
}