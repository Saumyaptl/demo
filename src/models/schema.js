const mongoose = require("mongoose");
const onboardingSchema =new mongoose.Schema({
    fullname:{
        type:String,
        // required:true
    },
    headline:{
        type:String,
        // required:true
    },
    companyname:{
        type:String,
        // required:true
    },
    position:{
        type:String,
        // required:true
    },
    dateofjoin:{
        type:String,
        // required:true,
        
    },
    dateofresign:{
        type:String,
        // required:true,
        
    },
    workdescription:{
        type:String,
        // required:true
    },
    usedskills:{
        type:String,
        // required:true
    },
    skills:{
        type:String,
        // required:true
    },
    yearofexperience:{
        type:Number,
        // required:true
    },
    projecttitle:{
        type:String,
        // required:true
    },
    projecturl:{
        type:String,
        // required:true
    },
    projectdescription:{
        type:String,
        // required:true
    },
    projectduration:{
        type:Number,
        // required:true
    },
    licensename:{
        type:String,
        // required:true
    },
    organization:{
        type:String,
        // required:true
    },
    link:{
        type:Array,
        // required:true
    },
    issuedate:{
        type:Array,
        // required:true
    },
    course:{
        type:String,
        // required:true
    },
    courseorganization:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    phone:{
        type:Number,
        required:true,
        // unique:true
    },
    skype:{
        type:String,
        // required:true
    },



})
const Onboard = new mongoose.model("Onboard",onboardingSchema);
module.exports = Onboard;