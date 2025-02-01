const express = require("express");
const { userSingIn, postUser } = require("./user.service");
const routerUser = express.Router();

routerUser.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await postUser(username, password);

    res.status(200).json({
      data: user,
      message: "Create User Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerUser.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const [token, tokenOption] = await userSingIn(username, password);

    res.cookie("token", token, tokenOption).status(200).json({
      message: "User logged in successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerUser.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({
      data: {},
      message: "Logout Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error || error.message,
      success: false,
      error: true,
    });
  }
});

module.exports = routerUser;
