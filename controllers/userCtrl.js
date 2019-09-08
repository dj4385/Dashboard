const userModel = require('../models/userModel')

module.exports = {
    registerUser : (req,res)=>{
        if(!req.body){
            res.status(400).send({
                "message": "Invaild details"
            })
        } else {
            var userData = userModel({
                name: req.body.name,
                contactNo : req.body.contactNo,
                email: req.body.email,
                password: req.body.password
            })

            userData.save().then((err,data)=>{
                if(err){
                    res.send(err)
                } else {
                    res.send('<h1>Register Success <a href="login.html></a></h1>')
                }
            })
        }
    },
    loginUser : (req, res)=>{

    }
}