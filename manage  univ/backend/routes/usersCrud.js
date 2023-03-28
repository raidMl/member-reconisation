const express=require("express")
const router=express.Router() // in the place of app
const { readUser, createUser, searchUser, deleteUser, updateUser } = require("../controllers/UserController");




//create
router.post("/user",createUser)

//read
router.get('/user',readUser )
//read by id
router.get('/user/:id', searchUser)

//update

router.patch("/user/:id",updateUser)

router.delete("/user/:id", deleteUser)

module.exports=router