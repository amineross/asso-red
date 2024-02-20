import express, { Router } from "express";
import { createNewsArticle, getAllNewsArticles, getNewsArticle } from "../controllers/NewsArticleControllers.js";

const newsRouter = express.Router();

newsRouter.post('/createNewsArticle', createNewsArticle);
newsRouter.route("/:slug").get(getNewsArticle);
newsRouter.route("/").get(getAllNewsArticles);

export default newsRouter;