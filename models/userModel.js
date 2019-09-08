const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name : {
        type: String,
        min : 3,
        max : 50,
        require: true
    },
    contactNo : {
        type: String,
        min : 10,
        max : 10,
        require: true
    },
    email : {
        type: String,
        min : 3,
        max : 255,
        unique: true,
        require: true
    },
    
    password : {
        type: String,
        min : 7,
        max : 100,
        require: true
    }
})

module.exports = mongoose.model('userSch', userSchema)