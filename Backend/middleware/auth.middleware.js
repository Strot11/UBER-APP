const userModel = require("../models/user.model"); // importing the user model to use it in this file.
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/Captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1]; // Get token from cookies or headers since for headers hame split karna padega as it will come in the form of Bearer token ("Bearer abcdef12345") so we need to split it and get the token from it. the full header string, e.g., "Bearer abcdef12345".split(' ') splits the string into an array: ["Bearer", "abcdef12345"].
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlackListed = await userModel.findOne({ token: token });
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key
    req.user = await userModel.findById(decoded._id); // Find the user by ID from the token which is given to it while creation and on the basis of it we are getting the user from the database.
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    return next(); // in routes aage profile pe jaane ke liye.
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: "Unauthorized" });
  }
};
