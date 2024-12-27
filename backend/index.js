import express from "express"
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
import connection from "./config/db.js"
import { bookRoute } from "./routes/book.route.js"
import { userRoute } from "./routes/user.route.js"
import { courseRoute } from "./routes/course.route.js"
import cors from "cors"

dotenv.config()

// app.use(cors())
app.use(cors({
    origin :"*"
}))


const PORT = process.env.PORT || 3000


app.use(express.json())
app.use("/book",bookRoute)
app.use("/course",courseRoute)
app.use("/user",userRoute)

//connect to MongoDB

app.listen(PORT,async(error)=>{
    await connection;
    if(!error){
        console.log(`server is running on port ${PORT}`)
    }else{
       console.log("Error:",error)
    }
})