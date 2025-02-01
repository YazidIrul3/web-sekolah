const { createdConfirmNews } = require("./confirmNews.repository");

const postConfirmNews = async (confirmNews) => {
  await createdConfirmNews(confirmNews);
};

module.exports = { postConfirmNews };
