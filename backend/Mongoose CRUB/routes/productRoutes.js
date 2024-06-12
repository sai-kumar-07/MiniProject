//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const productApi = require('../apis/productApi')
//fetch all records
router.get("/fetchp", productApi.products_all)
//insert a record
router.post("/insertp", productApi.insert_product)
//update a record
router.put("/updatep", productApi.update_product)
//delete a record
router.delete("/deletep", productApi.delete_product)
//export router
module.exports = router
