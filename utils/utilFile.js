const bCrypt = require('bcrypt')

module.exports = {
    encryptPassword : (password)=>{
        return bCrypt.hashSync(password, 10)
    }
}