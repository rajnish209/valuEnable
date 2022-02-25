const jwt = require('jsonwebtoken');
require("dotenv").config();

const User=require("../models/user.model")

const newtoken=(user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY);
}

const register=async (req,res)=>{
    let user;
    try{
        user= await User.findOne({email: req.body.email})

        if(user){
            return res.status(400).send({message: "please check email and password"})
        }
        user= await User.create(req.body);
        const token= newtoken(user)
        return res.status(200).send({user,token});
    }catch(err){
        return res.status(400).send({message: "something went wrong"})
    }
}
const login= async (req,res)=>{
    try{
       let user= await User.findOne({email: req.body.email})
       if(! user){
        return res.status(400).send({message: "please check email and password"})
    }
    let comp=user.checkpassword(req.body.password)
    if(! comp){
        return res.status(400).send({message: "please check email and password"})
    }
    const token= newtoken(user)
    return res.status(200).send({user,token});
    }catch(err){
        return res.status(500).send({message: "something went wrong"})
    }
}
module.exports={register,login,newtoken}