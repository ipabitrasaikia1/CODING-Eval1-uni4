const mongoose = require("mongoose")

// const Skill = require("./skill.model")


const jobSchema = new mongoose.Schema({
    "name" : {type : String , required : true},
    
    // skill_id : {type : mongoose.Schema.Types.ObjectId, ref : "skill",require : true} ,
   
},{versionKey:false,timestamps:true}) 

module.exports = mongoose.model("job",jobSchema) ;