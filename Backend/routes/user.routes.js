const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be atleast 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be atleast 6 characters"),
  ],
  userController.registerUser
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be atleast 6 characters"),
  ],
  userController.loginUser
);
router.get(
  "/profile",
  authMiddleware.authUser,
  userController.getUserProfile,
  (req, res, next) => {
    res.status(200).json({ user: req.user });
  }
);
router.get(
  "/logout",
  authMiddleware.authUser,
  userController.logoutUser,
  (req, res, next) => {
    res.send("Logged out successfully");
  }
);

module.exports = router;
