const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

const connectToDb = require("./db/db");
connectToDb();
app.use(cors());
app.use(express.json()); //If you don’t use express.json(), req.body will be undefined for JSON data.
app.use(express.urlencoded({ extended: true })); // it's used for parsing URL-encoded form data extended: false: Parses only simple key-value pairs
app.use(cookieParser()); // to parse the cookies in the request
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.use("/captain", captainRoutes);
app;
module.exports = app;
