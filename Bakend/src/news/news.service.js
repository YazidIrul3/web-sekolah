const {
  createNews,
  findAllNews,
  editNews,
  findDeletedNews,
  findDetailNews,
  findLatestNews,
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

const postnews = async (data, news) => {
  const { title, description, image } = news;

  if (!title || !description || !image) {
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
  postnews,
  updateNews,
  deleteNews,
};
// Create the news
