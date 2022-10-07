const router = require("express").Router();
const User = require("../models/User");

router.get("/users",async (req,res)=>{
    const user = await User.find({password:"123456"});
    console.log(user);
} )

module.exports = router;