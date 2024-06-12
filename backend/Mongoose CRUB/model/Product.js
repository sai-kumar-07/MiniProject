// import mongoose
const mongoose = require('mongoose')
//create schema
const productSchema = new mongoose.Schema({
    p_id:Number,
    p_name:String,
    p_cost:Number,
    p_cat:String,
    p_img:String,
    p_desc:String
})
//export the schema
module.exports = mongoose.model("Product",productSchema)
