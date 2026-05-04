const { body } = require("express-validator");

const registerValidator = [
  body("fullName").notEmpty().withMessage("Full Name is required."),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
];

const loginValidator = [
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("password").notEmpty().withMessage("Password is required."),
];

const noteValidator = [
  body("title").notEmpty().withMessage("Title is required."),
  body("description")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Description must be at least 5 characters long."),
];

module.exports = { registerValidator, loginValidator, noteValidator };
