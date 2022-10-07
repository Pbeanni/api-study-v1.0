const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//register//
router.post("/register", async (req,res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            profilePic: req.body.profilePic,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);

    } catch(err){
        res.status(500).json(err);
        console.log(err);
    }
} );


//login//
router.post("/login",async (req,res) =>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return res.status(400).json("usuario nao encontrado");
           
        const validate = await bcrypt.compare(req.body.password,user.password);
        if(!validate) return res.status(400).json("senha errada");

        const {password,...others} = user._doc;
        console.log(user);
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
} )


module.exports = router;