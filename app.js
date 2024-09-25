require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
mongoose.connect('mongodb://127.0.0.127017/dChatApp');

const app = express()
const http = require('http').Server(app)
const PORT = 3000 | process.env.PORT
http.listen(PORT, function() {
    console.log(`Server is running at Port ${PORT}`);
    
})