const userModel = require("../models/user.model"); // importing the user model to use it in this file.

module.exports.createUser = async ({ fullname, email, password }) => {
  if (!fullname || !fullname.firstname || !email || !password) {
    throw new Error("Please provide all the fields");
  }
  const user = await userModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password,
  });
  return user;
};
