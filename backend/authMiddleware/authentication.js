import jwt from "jsonwebtoken"
import {UserModel} from "../model/user.model.js";
import dotenv from "dotenv"

const auth = async(req,res,next)=>{
   if(!req.headers.authorization){
     return  res.status(400).json({message:"token not found"})
   }
   
   
   const token = req.headers.authorization?.split(" ")[1]
   if(!token){
       return  res.status(400).json({message:"token not found please login again"})
     }
    if(token){
        try {
         const decoded = jwt.verify(token, process.env.SECRET_KEY)
         console.log("decoded-",decoded)
          const user = await UserModel.findOne({_id:decoded.id})
          console.log("user-",user)
          req.user = user
          next()
        } catch (error) {
            res.status(400).json({message:"token not found",error:error})
        }
    }
   }

   export{auth}