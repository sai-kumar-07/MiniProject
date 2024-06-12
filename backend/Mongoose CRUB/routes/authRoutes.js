//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const authenApi = require('../apis/authenApi')
//insert a record
router.post("/authen", authenApi)
//export router
module.exports = router