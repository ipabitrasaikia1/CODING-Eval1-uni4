const Skill = require("../models/skill.model")
const City = require("../models/city.model")
const Job =require("../models/jobs.model")
const express = require("express") 
const router = express.Router()

router.get("",async (req,res)=>{ 
    try {
        const sections = await Skill.find().populate("city_id").populate("job_id") ;
        return res.status(201).send(sections)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 
router.get("/:id",async (req,res)=>{ 
    try {
        const section = await Skill.findById(req.params.id).populate("city_id").populate("job_id").lean().exec() ;
        return res.status(201).send(section)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 
router.post("",async (req,res)=>{ 
    try {
        const section = await Skill.create(req.body);
        return res.status(201).send(section)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 

router.patch("/:id",async (req,res)=>{ 
    try {
        const section = await Skill.findByIdAndUpdate(req.params.id,req.body,{new : true}) ;
        return res.status(201).send(section)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 

router.delete("/:id",async (req,res)=>{ 
    try {
        const section = await Skill.findByIdAndDelete(req.params.id) ;
        return res.status(201).send("Deleted")
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 

module.exports = router;