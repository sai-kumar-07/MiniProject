//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import userApi
const userApi = require('../apis/userApi')
//fetch all records
router.get("/fetchu", userApi.users_all)
//insert a record
router.post("/insertu", userApi.insert_user)
//update a record
router.put("/updateu", userApi.update_user)
//delete a record
router.delete("/deleteu", userApi.delete_user)
//export router
module.exports = router
