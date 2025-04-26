const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name should be atleast 3 characters"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name should be atleast 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email should be atleast 5 characters"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be atleast 6 characters"],
    select: false, // to not show password in response like whenever you fnd user then the passwod will not go.
  },
  socketId: {
    // used for live tracking as our driver is where.
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  if (!this._id) {
    throw new Error("User ID is undefined");
  }
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  }); // Ensure _id is a string
  return token;
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // this.password is the hashed password in the database
};

// Hash password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10); // 10 is the salt rounds used to hash the password
};

const userModel = mongoose.model("user", userSchema); // user is the name of the collection in the database
module.exports = userModel;
