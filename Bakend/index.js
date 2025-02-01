const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routerNews = require("./src/news/news.controller");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/db");
const routerUser = require("./src/user/user.controller");
const routerConfirmNews = require("./src/confirmNews/confirmNews.controller");

const app = express();
const port = 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use("/api/news", routerNews);
app.use("/api/confirmNews", routerConfirmNews);
app.use("/api/user", routerUser);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("connect to mongodb");
  });
});
