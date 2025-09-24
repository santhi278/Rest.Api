var mongoose = require("mongoose")
var book = new mongoose.Schema({
    name : String,
    price : Number,
    title : String,
    Author : String,
    isActive : Boolean
})
module.exports = mongoose.model("book",book)


