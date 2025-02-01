const express = require("express");
const {
  postnews,
  getAllNews,
  updateNews,
  deleteNews,
  getDetailNews,
  getLatestNews,
  getCategoryNews,
  getConfirmationNews,
  getPendingNews,
} = require("./news.service");
const authToken = require("../middleware/authToken");
const routerNews = express.Router();

routerNews.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const news = await getAllNews(limit);

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerNews.get("/confirm", async (req, res) => {
  try {
    const news = await getConfirmationNews();

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerNews.get("/pending", async (req, res) => {
  try {
    const news = await getPendingNews();

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerNews.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const news = await getDetailNews(id);

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerNews.get("/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const news = await getCategoryNews(category);

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

// routerNews.get("/news/latest", async (req, res) => {
//   try {
//     const { limit } = req.query;

//     const news = await getLatestNews(limit);

//     res.status(200).json({
//       data: news,
//       error: false,
//       success: true,
//       message: "News fetched successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// });

routerNews.post("/", authToken, async (req, res) => {
  try {
    const { title, description, image, category, status, date } = req.body;

    const news = await postnews(req.body, {
      title,
      description,
      image,
      category,
      status,
      date,
    });

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerNews.put("/:id", authToken, async (req, res) => {
  try {
    const { id } = req.params;

    const news = await updateNews(id, req.body);

    res.status(200).json({
      data: news,
      error: false,
      success: true,
      message: "News updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

routerNews.delete("/:id", authToken, async (req, res) => {
  try {
    const { id } = req.params;

    await deleteNews(id);

    res.status(200).json({
      error: false,
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
});

module.exports = routerNews;
