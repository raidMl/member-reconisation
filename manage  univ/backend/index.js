const express=require("express");
const cors=require("cors");
const users=require("./users.js")
const mongoose=require("mongoose")
const register=require('./routes/register')
const login =require('./routes/login')
const app=express();
require("dotenv").config()

app.use(express.json()) // is middle ware to use data json
app.use(cors())
app.use("/api/register",register) // link in localhost for register
app.use("/api/login",login)
app.get("/",(req,res)=>{

    res.send("welcome to shoping cardr")
})

app.get("/users",(req,res)=>{
    res.send(users)
})

const port=process.env.PORT || 5000  // serch in env variable if port used or no  if used i used  it will use another one auto
const uri=process.env.DB_URI
app.listen(port,console.log(`server runing on ${port}`))
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongoDb connection successful!"))
.catch(()=>console.log("error in connection "))




