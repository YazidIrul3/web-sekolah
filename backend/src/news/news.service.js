const {
  createNews,
  findAllNews,
  editNews,
  findDeletedNews,
  findDetailNews,
  findLatestNews,
  findNewsByCategory,
  findConfimationNews,
  findPendingNews,
} = require("./news.repository");

const getAllNews = async (limit = 0) => {
  const news = await findAllNews(limit);

  return news;
};

const getDetailNews = async (id) => {
  await findDetailNews(id);
};

const getLatestNews = async (limit = 0) => {
  await findLatestNews(limit);
};

const getCategoryNews = async (category) => {
  await findNewsByCategory(category);
};

const getConfirmationNews = async () => {
  await findConfimationNews();
};

const getPendingNews = async () => {
  await findPendingNews();
};

const postnews = async (data, news) => {
  const { title, description, image, category, status, date } = news;

  if (!title || !description || !image || !category || !status || !date) {
    throw new Error("you have to fill in the form ");
  }

  await createNews(data);
};

const updateNews = async (id, news) => {
  await editNews(id, news);
};

const deleteNews = async (id) => {
  await findDeletedNews(id);
};

module.exports = {
  getAllNews,
  getDetailNews,
  getLatestNews,
  getCategoryNews,
  getConfirmationNews,
  getPendingNews,
  postnews,
  updateNews,
  deleteNews,
};
// Create the news
