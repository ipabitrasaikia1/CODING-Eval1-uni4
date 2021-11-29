const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())


// ---------- connecting mongoose ---//

const connect = require("./configs/db")

//---- creating SCHEMA and Model ----//

const Company = require("./models/company.model")
const Skill = require("./models/skill.model")
const City = require("./models/city.model")
const Job = require("./models/jobs.model") 
const Feature = require("./models/features.model")
const Time = require("./models/time.model")

//--- REST API ---
const companyController = require("./controllers/company") 

const skillController = require("./controllers/skill")

const jobController = require("./controllers/jobs")

const cityController = require("./controllers/city")

const featureController = require("./controllers/features")
const timeController = require("./controllers/time")

//---- 
app.use("/company",companyController)
app.use("/skill",skillController)
app.use("/job",jobController)
app.use("/city",cityController)
app.use("/feature",featureController)
app.use("/time",timeController)

app.listen(5003,async()=>{
    await connect();
    console.log("Port ready at 5003")

})