const mongoose = require("mongoose")

const Schema = mongoose.Schema

const hotelModel = new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    state:String,
    district:String,
    address:String,
    description:String,
    hotelNumber:String,
})

const hotel = mongoose.model("hotel", hotelModel)

module.exports = hotel
