const mongoose = require("mongoose")
const companySchema = new mongoose.Schema({
    "name" : {type : String , require : true},
    "Year" : {type:Number,required:true},
    "openjob": {type:Number,required:true}
    
},{versionKey:false,timestamps:true});

module.exports = mongoose.model("company",companySchema) ;