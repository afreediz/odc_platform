const mongoose = require("mongoose")

const Schema = mongoose.Schema

const hotelModel = new Schema({
    hotelName:String,
    userName:String,
    Email:String,
    phone:String,
    state:String,
    District:String,
    Address:String,
    Description:String,
    hotelNumber:String,
    Password:String
})

const hotel = mongoose.model("hotel", hotelModel)

module.exports = hotel
