const User = require('../model/user')
const authenApi = async (req,res)=>{
    let u_name = req.body.u_name
    let u_pwd = req.body.u_pwd
    let obj = {u_name,u_pwd}
    try{
        const real = await User.findOne(obj)
        if(real){
            console.log("success")
            res.send({"user":"success"})
        }
        else{
            console.log("failed")
            res.send({"user":"fail"})
        }
    }
    catch(error){
        console.log("failed")
        res.send({"user":"fail"})
    }
}
module.exports = authenApi