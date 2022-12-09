const mongoose = require("mongoose");


const contactShema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    textarea :{
        type:String,
        required:true,
        
    },
})

// creating collection 

const Contact = new mongoose.model("Contact",contactShema);

module.exports = Contact;