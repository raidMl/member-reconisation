//we use crud
const bcrypt=require("bcrypt");
const Joi=require("joi")
const express=require("express")
const {User}=require("../models/user");
const genAuthToken = require("../utils/genAuthToken");

const router=express.Router();

router.post("/",async(req,res)=>{
   const schema=Joi.object({                //validate data
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().min(3).max(200).required().email(),
    password:Joi.string().min(6).max(200).required(),
    role:Joi.string().min(6).max(200).required(),

   })

   const  {error}=schema.validate(req.body)
   if(error) return res.status(400).send(error.details[0].message)

   //check email exsist or no
  let user=   await User.findOne({email:req.body.email})
  if(user) return res.status(400).send("user already exist..")

  //register

  user=new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    role:req.body.role,
  })
    //hash pass
    const salt=await bcrypt.genSalt(10) //generate string of 10 char
    user.password=await bcrypt.hash(user.password,salt)
    user=await user.save()
    const token=genAuthToken(user)
    res.send(token)
})

//read data
// Read operation
app.get('/api/models', async (req, res) => {
    try {
      const models = await Model.find();
      res.send(models);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
module.exports=router