const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


// Registration Logic Controller
async function registerUser(req,res){
    const {fullName,email,password} = req.body

    // check if user already exists
    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists){
        return res.status(400).json({message:"User Already Exists"})
    }
    const hashed = await bcrypt.hash(password,10)

    const user = await userModel.create({
        fullName,
        email,
        password:hashed
    })

    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"User Registered Successfully!",
        fullName:user.fullName,
        email:user.email
    })
    console.log(hashed)
}

// Login Logic Controller



module.exports = {registerUser}