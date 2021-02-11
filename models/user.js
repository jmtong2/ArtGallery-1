const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userData = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userData)
module.exports = User