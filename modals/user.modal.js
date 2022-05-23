const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    profilePic: String,
    contactNumber: Number,
    email: String,
    password: String,
},
    {
        timeStamp: true
    }
)

module.exports = mongoose.model(userSchema)