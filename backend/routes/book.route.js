import express from "express"
import { BookModel } from "../model/book.model.js"
const bookRoute  = express.Router()

bookRoute.get('/',async(req,res)=>{
    try {
        const book = await BookModel.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error:",error)
        res.status(400).json({"Error":error.message})
    }
})

export{bookRoute}