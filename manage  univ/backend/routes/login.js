const bcrypt=require("bcrypt");
const Joi=require("joi")
const express=require("express")
const {User}=require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

const router=express.Router();

router.get("/",async(req,res)=>{
    const schema=Joi.object({                //validate data
        email:Joi.string().min(3).max(200).required().email(),
        password:Joi.string().min(6).max(200).required()
       })
    
       const  {error}=schema.validate(req.body)
       if(error) return res.status(400).send(error.details[0].message)

          //check email exsist or no
  let user=   await User.findOne({email:req.body.email})
  if(!user) return res.status(400).send("invalid email or password..")
  
  //check password is correct
  const isvalid=await bcrypt.compare(req.body.password,user.password)
  if(!isvalid) return res.status(400).send("Invalid email or password")

  //
  const token=genAuthToken(user)
  res.send(token)

})

module.exports=router
