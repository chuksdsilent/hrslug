const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    
    first_name: {
        type: String,
        required: true
    }, 

    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("user", UserSchema);