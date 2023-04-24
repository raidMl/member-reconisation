const bcrypt = require("bcrypt");
const Joi = require("joi")
const express = require("express")
const { User } = require("../models/user");
const genAuthToken = require("../utils/genAuthToken");
const qr = require("qrcode")


const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({                //validate data
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
    role: Joi.string().min(4).max(200).required(),
    faculty: Joi.string().min(6).max(200).required(),
    matricule: Joi.string().min(3).max(10),
    isin: Joi.bool()
  })

  const { error } = schema.validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //check email exsist or no
  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send("user already exist..")


  //generate qr code
  const userqr = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    faculty: req.body.faculty,
    matricule: req.body.matricule,
    isin: false,
  }

  let stJson = JSON.stringify(userqr)
  //generate random name 
  const crypto = require('crypto');

  function generateRandomName(originalName) {
    const hash = crypto.randomBytes(10).toString('hex');
    const extension = originalName.split('.').pop();
    return `${hash}.${extension}`;
  }

  const originalName = 'my-image';
  const randomName = generateRandomName(originalName);
  console.log(randomName); // Example output: '4f5b7c9d2e.jpg'






  //check file exist or not

  const fs = require('fs');

  function checkIfImageExists(filename) {
    try {
      fs.accessSync(filename, fs.constants.F_OK);
      return true;
    } catch (err) {
      return false;
    }
  }

  const filename = `../images/${randomName}`;
  if (checkIfImageExists(filename)) {
    console.log('The image exists!');
  } else {
    console.log('The image does not exist.');
    //generate qr image
    qr.toFile(`../images/${randomName}.png`, stJson, function (error) {
      if (error)
        return console.log(error)

    })
  }
  //register

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    faculty: req.body.faculty,
    matricule: req.body.matricule,
    isin: false,
    image: `${randomName}.png`


  })
  //hash pass
  const salt = await bcrypt.genSalt(10) //generate string of 10 char
  user.password = await bcrypt.hash(user.password, salt)
  user = await user.save()
  const token = genAuthToken(user)
  res.send(token)
})
module.exports = router