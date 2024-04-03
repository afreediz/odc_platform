const mongoose = require("mongoose")

const Schema = mongoose.Schema

const jobModel = new Schema({
    jobName: String,
    Description: String,
    noOfApplicants: Number,
    jobCreatedDate: Date,
    salary: Number,
    department:String 
   
})

const jobs = mongoose.model("jobs", jobModel)

module.exports = jobs
