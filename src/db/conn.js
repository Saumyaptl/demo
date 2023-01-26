const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const mongo=mongoose.connect("mongodb://127.0.0.1:27017/Onboardingform",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
 });

