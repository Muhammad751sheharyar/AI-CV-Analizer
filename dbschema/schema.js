const mongoose=require("mongoose");
const UserData=new mongoose.Schema({
    Fname:{
       type:String,
       required:true 
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


let User=mongoose.model("analizer",UserData);
module.exports=User;