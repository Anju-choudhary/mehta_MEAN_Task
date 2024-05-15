//external module
const bcrypt = require("bcrypt");

//internal module
const User = require("../models/user");
const UserModel = require("../utils/schema");

// to signup route
const sign_up = async (req, res) => {
  //schema validate
  const { error } = UserModel.signUpSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const { username, email, password } = req.body;
    try {
      //check whether email is already present or not
      const existingUser = await User.findOne({
        where: {
          email,
        },
      });

      //show error if present
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      //else create data
      const newUser = await User.create({
        username,
        email,
        password,
      });
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
};

//for login
const login = async (req, res) => {
  const { error } = UserModel.loginSchema.validate(req.body);
  if (error) {
    console.log("error", error);
    res.status(500).json({ message: error.details[0].message });
  } else {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      console.log("inside try", email, password);
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        console.log("inside user");
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
      req.session.userId = user.id;
      return res.status(200).json({
        message: "login succesfully!",
        data: user,
      });
    } catch (err) {
      console.log("error");
      return res.status(500).json({ message: "Server Error" });
    }
  }
};

module.exports = {
  sign_up,
  login,
};
