"use strict";

const express = require("express");
const cors = require('cors')
const app = express();
const ArticlesService = require('./ArticlesService');

app.use(cors());
app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Server is listening in http://localhost on port 3000");

  app.get("/api/articles", (req, res, next) => {
    const articles = ArticlesService.getArticles();
    res.json(articles);
    return;
  });
});
