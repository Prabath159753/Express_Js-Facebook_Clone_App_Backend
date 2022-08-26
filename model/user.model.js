const mongoose = require('mongoose')

const createAccountSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CreateAccount',createAccountSchema)