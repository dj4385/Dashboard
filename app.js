const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      userRoute = require('./routes/user'),
      mongoose = require('mongoose'),
      configFile = require('./config/configFile')


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/',userRoute)


mongoose.connect(configFile.DbUrl, {useNewUrlParser: true, useCreateIndex: true}).then(
    ()=>{
        console.log('Database connected')
    }
).catch(
    err=>{
        console.log(err)
    }
)

app.listen(4000,()=> console.log('Server started...'))