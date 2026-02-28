const express = require("express")
const authController = require("../controllers/auth.controller")

const router = express.Router()

// auth routes
router.post("/user/register",authController.registerUser)
router.post("/user/login",authController.loginUser)
router.get("/user/logout",authController.logOut)


module.exports = router