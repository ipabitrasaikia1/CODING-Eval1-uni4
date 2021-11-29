const mongoose = require("mongoose")

const featureSchema = new mongoose.Schema({
  
   "feature" : {type : String,required:true} 

},{versionKey:false,timestamps:true}) 

module.exports = mongoose.model("feature",featureSchema) ;