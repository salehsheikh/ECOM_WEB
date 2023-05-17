const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3,
        maxlength:15},
        email:{
            type:String,
            require:true,
            minlength:3,
            maxlength:200,
            unique:true,
    },
    password:{
        type:String,
        require:true,
        minlength:3,
        maxlength:1000,
},
});
const User=mongoose.model("User",userSchema);
exports.User=User;