const mongoose = require("mongoose")

const Schema = mongoose.Schema

const notificationModel = new Schema({
UserID:{type:Schema.Types.ObjectId,ref:"Users"},
Content:String,
Time:Date,
Read:Boolean
})

const notification = mongoose.model("notification", notificationModel)

module.exports = notification
