const mongoose = require("mongoose")

const Schema = mongoose.Schema

const reviewModel = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: "hotel",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
    },
    reviewText:String,
    ratings:Number,
    dateOfReview:Date,
})

const review = mongoose.model("review", reviewModel)

module.exports = review
