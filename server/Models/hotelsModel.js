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
    block:{
        type:Boolean,
        default:false
    }
})

const hotel = mongoose.model("hotel", hotelModel)

module.exports = hotel
