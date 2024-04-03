const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userModel = new Schema({
    name: String,
    dob: Date,
    state: String,
    district: String,
    address: String,
    phone: String,
    email: String,
    password: String,
})

const users = mongoose.model("Users", userModel)

module.exports = users
