require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')

const userRoute = require('./routes/userRoute')
const app = express()

app.use('/',userRoute)

mongoose.connect('mongodb://127.0.0.127017/dChatApp');

const http = require('http').Server(app)
const PORT = 3000 | process.env.PORT
http.listen(PORT, function() {
    console.log(`Server is running at Port ${PORT}`);
    
})