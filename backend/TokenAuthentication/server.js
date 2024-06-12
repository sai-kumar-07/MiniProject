//import modules
let express = require('express')
let bodyparser = require('body-parser')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client encoding form data to json
app.use(bodyparser.urlencoded({ 'extended': 'false' }))
//import login module
let login = require('./login/login')
//use login module
app.use("/login", login)
//assign port no
app.listen(8080)
console.log('Server listening port no 8080')
/*
    >node server
    http://localhost:8080/login
    POST
    body    -> raw  -> JSON
*/
