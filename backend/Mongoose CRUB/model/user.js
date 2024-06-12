// import mongoose
const mongoose = require('mongoose')
//create schema
const userSchema = new mongoose.Schema({
    u_id:Number,
    u_name:String,
    u_pwd:String,
    u_u_email:String,
    u_addr:String,
    u_u_contact:String
})
//export the schema
module.exports = mongoose.model("User",userSchema)
