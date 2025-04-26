const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const captainSchema = new mongoose.Schema({
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
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be atleast 6 characters"],
    select: false, // to not show password in response like whenever you fnd user then the passwod will not go.
  },
  SocketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color should be atleast 3 characters"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate should be atleast 3 characters"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity should be atleast 1"],
    },
    location: {
      lat: {
        //latitude
        type: Number,
        // not putting it required true as initially the driver will not be havvving location.
      },
      lng: {
        //longitude
        type: Number,
      },
    },
  },
});
captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  }); // Ensure _id is a string
  return token;
};
// Compare password
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password); // this.password is the hashed password in the database
};
// Hash password
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10); // 10 is the salt rounds used to hash the password
};
const captainModel = mongoose.model("captain", captainSchema); // user is the name of the collection in the database
module.exports = captainModel;
