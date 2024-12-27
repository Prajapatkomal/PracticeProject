import express from "express";
import { UserModel } from "../model/user.model.js";
const userRoute = express.Router();
import bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"

userRoute.post("/signup", async (req, res) => {
  try {
    const { name,email, password } = req.body;
    const user = await UserModel.findOne({email});
    console.log(user)
   
    if (user) {
        return res.status(200).json({ message: "user has already registerd" });
    }

      bcrypt.hash(password, 5, async(err, hash)=>{
     if(err){
           return res.status(500).json({ message: "error in hashing password",Error:err.message });
     }else{
          const newUser = new UserModel({
             name,
             email,
             password:hash
          })
          await newUser.save();
          res.status(200).json({message: "user registerd successfully,Please login to continue" });
     }

  });

  } catch (error) {
      res.status(400).json({message:"error in registering user",Error:error.message})
  }
});






userRoute.post("/login",async(req,res)=>{
   try {
    const {email,password} = req.body
    const user = await UserModel.findOne({email})
    if(!user){
     return  res.status(400).json({message:"Invalid username"})
    }

  
     bcrypt.compare(password,user.password,(err, result)=>{
      if(err){
           return res.status(400).json({message:"Internal server error",Error:err.message})
      }

      if(result){
           const token = jwt.sign({id:user._id},process.env.SECRET_KEY)
           return res.status(200).json({message:"user logged successfully" ,token:token })
       }else{
            return res.status(400).json({message:"Innvalid userName or password"})
       }

  });

   } catch (error) {
      res.status(500).json({message:"Internal server error",Error:error.message})
   }


})





export {userRoute}