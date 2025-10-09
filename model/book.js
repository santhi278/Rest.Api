const mongoose = require("mongoose")
const book = new mongoose.Schema({
    title : String,
    price : Number,
    Author : String,
    isActive : Boolean
})
module.exports = mongoose.model("book",book)


