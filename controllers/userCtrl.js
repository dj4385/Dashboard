const userModel = require('../models/userModel'),
      util = require('../utils/utilFile'),
      bcrypt = require('bcrypt')


module.exports = {
    registerUser : (req,res)=>{
        if(!req.body){
            res.status(400).send({
                "message": "Invaild details"
            })
        } else {
            var encPass = util.encryptPassword(req.body.password)            

            var userData = userModel({
                name: req.body.name,
                contactNo : req.body.contactNo,
                email: req.body.email,
                password: encPass
            })

            userData.save().then((data)=>{
                // res.send(data)
                res.send(`<h1>Register Success </h1> <a href="login.html>login</a>`)
            }).catch(err=>{
                res.send(err.errmsg)
            })
        }
    },
    loginUser : async (req, res)=>{
        if(!req.body){
            res.status(400).send({
                "message": "Invalid login id and password"
            })
        } else {
            let user = await userModel.findOne({ email : req.body.email})

            if(!user){
                res.status(401).send({
                    "message":"Invalid user"
                })
            } else if(user){
                var matchPassword = bcrypt.compare(user.password, req.body.password)
                if(!matchPassword){
                    res.send({
                        "message": "Invalid password"
                    })
                } else {
                    res.send({
                        "message": "Login success"
                    })
                    // res.sendfile('')
                }
            }
        }
    }
}