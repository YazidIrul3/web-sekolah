const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authToken = (req, res, next) => {
  try {
    const token = req?.header || req.cookies?.token;
    console.log(token);

    if (!token) {
      return res.status(401).json({
        message: "You must login first",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      console.log(err);
      console.log("decoded", decoded);

      if (err) {
        console.log("error auth", err);
      }

      req.userId = decoded?._id;

      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;
