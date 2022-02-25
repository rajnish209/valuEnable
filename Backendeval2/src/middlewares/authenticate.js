const jwt = require('jsonwebtoken');
require("dotenv").config();
function verifytoken(token){
    return new Promise(function(resolve,reject){
        jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,user){
            if(err){
                return reject(err)
            }
            return resolve(user)
        })
    })
}

async function authenticate(req,res,next){
const bearertoken=req.header.authorization;
if(!bearertoken || !bearertoken.startsWith('Bearer ')){
    return res.status(400).send({message: "pls provide bearer token"})
}
const token =bearertoken.split(" ")[1]
try{
const {user}=await verifytoken(token)
req.user=user;
return next();
}catch(err){
    return res.status(400).send({message: "pls provide bearer token"})
}
}
module.exports=authenticate;