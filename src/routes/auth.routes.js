const express = require("express")
const authController = require("../controllers/auth.controller")

const router = express.Router()

// auth routes
router.post("/user/register",authController.registerUser)
router.post("/user/login",authController.loginUser)



module.exports = router