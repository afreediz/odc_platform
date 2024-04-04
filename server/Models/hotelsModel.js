const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

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
hotelModel.methods.generate_token = function(){
    const token = jwt.sign({
        _id:this._id,
        name:this.name,
    }, process.env.JWT_SECRET, {expiresIn:"1d"})
    return token
}
const hotel = mongoose.model("hotel", hotelModel)

module.exports = hotel
