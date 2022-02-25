const mongoose=require("mongoose");
const bcryptjs = require('bcryptjs');
const userSchema=new mongoose.Schema({
    //name:{type: String,required:true},
    email:{type: String,required:true},
    password:{type: String,required:true,minlength: 8,maxlength: 20},
   // roles:[{type: String,required:true}]
},{
    versionKey:false,
    timestamps: true
})
userSchema.pre("save",function(next){
    if(! this.isModified("password")){
        return next();
    }
    const hash = bcryptjs.hashSync(this.password, 8);
    this.password=hash;
    return next();
})
userSchema.methods.checkpassword= function(password){
    const comp=bcryptjs.compareSync(password,this.password);
    return comp;
}
const User=mongoose.model("user",userSchema);
module.exports=User;