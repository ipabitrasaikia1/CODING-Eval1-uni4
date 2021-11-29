const mongoose = require("mongoose")

const timeSchema = new mongoose.Schema({
    period : {type : Number , required : true},
    
},{versionKey:false,timestamps:true}) 

module.exports = mongoose.model("time",timeSchema) ;