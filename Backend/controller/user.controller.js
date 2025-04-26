const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  try {
    // Validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    console.log("Registering user:", req.body);
    const isUserAlreadyExist = await mongoose.findOne({ email });
    if (isUserAlreadyExist)
      return res.status(400).json({ message: "User already exist" });

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashedPassword,
    });
    console.log("User created:", user);
    // Generate token
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (err) {
    next(err);
  }
};
module.exports.loginUser = async (req, res, next) => {
  try {
    // Validate incoming request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract and log user data
    const { email, password } = req.body;
    console.log("Logging in user:", req.body);
    // Find user by email
    const user = await userModel.findOne({ email }).select("+password"); // as due to select: false in the model we need to add +password to get the password field whenever any query is appliedon database or else it will not come
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token); // Set the token in a cookie for the client to use in subsequent requests

    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};
module.exports.logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token"); // Clear the cookie on logout

    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token is required for logout" });
    }
    await blackListTokenModel.create({
      token: token, // Use the initialized token variable
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};
