import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  name :{type:String, required:true} ,
  title :{type:String, required:true} ,
  price :{type:Number, required:true} ,
  caytegory :{type:String} ,
  image :{type:String, required:true} 
},
{
    versionKey:false
})

export const BookModel = mongoose.model("book",bookSchema)


    