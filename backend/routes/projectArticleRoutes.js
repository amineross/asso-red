import express, { Router } from "express";
import { createProjectArticle, getAllProjectArticles, getProjectArticle } from "../controllers/ProjectArticleControllers.js";

const projectRouter = express.Router();

projectRouter.post('/createProjectArticle', createProjectArticle);
projectRouter.route("/:slug").get(getProjectArticle);
projectRouter.route("/").get(getAllProjectArticles);

export default projectRouter;