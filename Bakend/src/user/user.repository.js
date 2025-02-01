const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../models/userModel");

dotenv.config();

const signUp = async (username, password) => {
  const user = await userModel.findOne({ username });

  const salt = await bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hashSync(password, salt);

  const payload = {
    username: username,
    role: "siswa",
    password: hashPassword,
  };

  const addUser = await new userModel(payload);
  await addUser.save();

  return { user };
};

const signIn = async (username, password) => {
  const user = await userModel.findOne({ username });
  const checkPassword = await bcrypt.compare(password, user.password);

  const tokenData = {
    _id: user._id,
    username: user.username,
  };

  const tokenOption = {
    httpOnly: true,
    secure: true,
  };

  const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 6,
  });

  return { user, checkPassword, token, tokenOption };
};

module.exports = {
  signIn,
  signUp,
};
