//import express modules
const express = require('express')
//create router instance
const router = express.Router()
//import cartApi
const cartApi = require('../apis/cartApi')
//fetch all records
router.get("/fetchc", cartApi.carts_all)
//insert a record
router.post("/insertc", cartApi.insert_cart)
//update a record
router.put("/updatec", cartApi.update_cart)
//delete a record
router.delete("/deletec", cartApi.delete_cart)
//export router
module.exports = router
