const Job = require("../models/jobs.model")

const Skill = require("../models/skill.model")


const express = require("express") 
const router = express.Router()

router.get("",async (req,res)=>{ 
    try {
        const users = await Job.find() ;
        return res.status(201).send(users)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 
router.get("/:id",async (req,res)=>{ 
    try {
        const user = await Job.findById(req.params.id).lean().exec() ;
        return res.status(201).send(user)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 
router.post("",async (req,res)=>{ 
    try {
        const user = await Job.create(req.body);
        return res.status(201).send(user)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 

router.patch("/:id",async (req,res)=>{ 
    try {
        const user = await Job.findByIdAndUpdate(req.params.id,req.body,{new : true}) ;
        return res.status(201).send(user)
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 

router.delete("/:id",async (req,res)=>{ 
    try {
        const user = await Job.findByIdAndDelete(req.params.id) ;
        return res.status(201).send("Deleted")
        
    } catch (e) {
        return res.send({"message" : e.message})
    }
   
}) 

module.exports = router;