import express from "express"
import { BookModel } from "../model/book.model.js"
const courseRoute  = express.Router()

courseRoute.get('/',async(req,res)=>{
    try {
        const course = await BookModel.find()
        res.status(200).json(course)
    } catch (error) {
        console.log("Error:",error)
        res.status(400).json({"Error":error.message})
    }
})

export{courseRoute}