const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    
    name: {
        type : String,
        required:true
    },

    image: {

        type : String //( if we use link to add image then type will be image)
        // type : Buffer (if we are adding image file then it will be a buffer)
    },

    conNumber:{
        type : Number,
        
//unique:true,
        // validate(value){
        //     var phoneno = /^\d{10}$/;
        //     if(value.match(phoneno)){
        //         console.log("valid");
        //     }else{
        //         throw new Error("Invalid Phone Number");
        //     }
        // }
    },

    email: {
        type : String,
        required : true,
        //unique: true,
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
