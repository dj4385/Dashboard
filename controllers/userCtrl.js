const userModel = require('../models/userModel'),
      util = require('../utils/utilFile')


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
                res.send(data)
                // res.send('<h1>Register Success <a href="login.html></a></h1>')
            }).catch(err=>{
                res.send(err.errmsg)
            })
        }
    },
    loginUser : (req, res)=>{

    }
}