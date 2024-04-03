const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userModel = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    dob: Date,
    state: String,
    district: String,
    address: String,
})

const users = mongoose.model("Users", userModel)

module.exports = users
