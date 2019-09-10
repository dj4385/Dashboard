const bCrypt = require('bcrypt'),
      mailer = require('nodemailer'),
      configFile = require('../utils/utilFile')

module.exports = {
    encryptPassword : (password)=>{
        return bCrypt.hashSync(password, 10)
    },
    sendMail : (email)=>{
        var transport = mailer.createTransport({
            service : 'outlook',
            auth: {
                user: 'dheeraj2406@outlook.com',
                password : 'VAmp24!@'
            }
        })

        var mailOptions = {
            from: 'dheeraj2406@outlook.com',
            to: 'myfriend@yahoo.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        }
    }
}