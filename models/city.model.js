const mongoose = require("mongoose")
const Job = require("../models/jobs.model")
const citySchema = new mongoose.Schema({
    "name" : {type : String , required : true},
    job_id : {type: mongoose.Schema.Types.ObjectId,ref:"job",required:true}
},{versionKey:false,timestamps:true}) 

module.exports = mongoose.model("city",citySchema);