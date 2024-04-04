const mongoose = require("mongoose")

const Schema = mongoose.Schema

const jobModel = new Schema({
    title: String,
    desc: String,
    noOfApplicants: Number,
    jobCreatedDate: Date,
    jobEndDate: Date,
    hotel: { type: Schema.Types.ObjectId, ref: "hotel" },
    salary: Number,
    users: [{employee:{ type: Schema.Types.ObjectId, ref: "Users" },present:Boolean}]
})

const jobs = mongoose.model("jobs", jobModel)

module.exports = jobs
