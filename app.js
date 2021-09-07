const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// importing routes
const postRoute = require('./routes/post')

// route middleware
app.use('/posts', postRoute)


// ROUTES
app.get('/', (req, res) => {
    res.json({path:'we are on home'})
})



//connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to DB')
})

// listening on the server
app.listen(3000, console.log('listening on port 3000'))