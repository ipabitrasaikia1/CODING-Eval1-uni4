const mongoose = require("mongoose")
const City = require("../models/city.model")
const Job = require("../models/jobs.model") 
const skillSchema = new mongoose.Schema({
    body : {type : String , required : true},
    city_id : {type: mongoose.Schema.Types.ObjectId , ref : "city",required:true},
    job_id: {type:mongoose.Schema.Types.ObjectId,ref:"job",required:true}
    
},{versionKey:false,timestamps:true}) 

module.exports = mongoose.model("skill",skillSchema) ;