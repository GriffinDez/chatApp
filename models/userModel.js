const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    isOnline:{
        type:String,
        default:'0'
    }
}, {timestamps:true})

module.exports = mongoose.Model('User', UserSchema)