const express = require('express')
const app = express()

const mongoose = require('mongoose')



// ROUTES
app.get('/', (req, res) => {
    res.send('we are on home')
})

//connect to DB
mongoose.connect('mongodb+srv://saurabh:saurabh123@cluster0.6tuld.mongodb.net/mongodb?retryWrites=true&w=majority', () => {
    console.log('connected to DB')
})

// listening on the server
app.listen(3000)