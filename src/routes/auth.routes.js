const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();
const {
  registerValidator,
  loginValidator,
} = require("../middlewares/validators");
const handleValidation = require("../middlewares/handleValidation");
// auth routes
router.post(
  "/user/register",
  registerValidator,
  handleValidation,
  authController.registerUser,
);
router.post(
  "/user/login",
  loginValidator,
  handleValidation,
  authController.loginUser,
);
router.get("/user/logout", authController.logOut);
router.get("/me", authMiddleware, authController.me);

module.exports = router;
