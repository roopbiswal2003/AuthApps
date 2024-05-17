//import mongoose
const mongoose =require("mongoose");

//route handler
const userSchema = new mongoose.Schema({
    
    name: {
        type:String,
        required:true,
        trim:true,
    },

    body: {
        type:String,
        required:true,
        trim:true,
    },

    password: {
        type:String,
        required:true,
    },

    role: {
        type:String,
        enum:["Admin","Student","Visitor"]
    }

    
});

//export
module.exports = mongoose.model("user",userSchema);

