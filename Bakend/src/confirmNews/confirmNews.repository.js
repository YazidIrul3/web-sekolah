const confirmNewsModel = require("../models/confirmNews");

const createdConfirmNews = async (news) => {
  const addConfirmNews = new confirmNewsModel(news);
  await addConfirmNews.save();
};

module.exports = { createdConfirmNews };
