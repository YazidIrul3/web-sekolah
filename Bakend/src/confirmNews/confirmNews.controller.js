const express = require("express");
const { postConfirmNews } = require("./confirmNews.service");
const authToken = require("../middleware/authToken");
const routerConfirmNews = express.Router();

routerConfirmNews.post("/",authToken, async (req, res) => {
  try {
    const confirmNews = await postConfirmNews(req.body);

    res.status(200).json({
      data: confirmNews,
      error: false,
      success: true,
      message: "Confirm News created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

module.exports = routerConfirmNews;