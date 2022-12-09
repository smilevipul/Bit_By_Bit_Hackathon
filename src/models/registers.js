const mongoose = require("mongoose");


const registerShema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    gender :{
        type:String,
        required:true
    },
    age :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
        
    },
    cpassword :{
        type:String,
        required:true,
    }
})

// creating collection 

const Register = new mongoose.model("Register",registerShema);

module.exports = Register;
