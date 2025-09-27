var mongoose = require("mongoose")

var ProductSchema = new mongoose.Schema({
    title : String,
    price : Number
})

module.exports = mongoose.model("products",ProductSchema)