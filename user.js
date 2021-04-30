const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    
    name: {
        type : String,
        required:true
    },



    conNumber:{
        type : Number,
        unique:true,
        validate(value){
            var phoneno = /^\d{10}$/;
            if(value.val.match(phoneno)){
                console.log("valid");
            }else{
                throw new Error("Invalid Phone Number");
            }
        }
    },

    email: {
        type : String,
        required : true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email address");
            }
        }
    },

    address:{
        type :String,
        required:true
    }

})


module.exports=userSchema;