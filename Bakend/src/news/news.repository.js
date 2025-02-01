const newsModel = require("../models/newsModel");

const findAllNews = async (limit = 0) => {
  const news = await newsModel.find().limit(limit);
  return news;
};

const findDetailNews = async (id) => {
  await newsModel.findById(id);
};

const findLatestNews = async (limit = 0) => {
  await newsModel.find().sort("date").limit(limit);
};

const createNews = async (news) => {
  const newNews = new newsModel(news);

  await newNews.save();
};

const editNews = async (id, news) => {
  await newsModel.findByIdAndUpdate(id, news);
};

const findDeletedNews = async (id) => {
  await newsModel.findByIdAndDelete(id);
};

module.exports = {
  findAllNews,
  findDetailNews,
  findLatestNews,
  createNews,
  editNews,
  findDeletedNews,
};
