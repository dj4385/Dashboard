const express = require('express'),
      userRoute = express.Router(),
      userCtrl = require('../controllers/userCtrl')
      
      
userRoute.post('/register',userCtrl.registerUser)
userRoute.post('/register',userCtrl.loginUser)

module.exports = userRoute