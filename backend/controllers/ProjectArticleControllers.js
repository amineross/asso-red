import ProjectArticle from "../models/ProjectArticle.js";
import {v4 as uuidv4} from 'uuid'

export const createProjectArticle = async (req, res) => {
    try {
        const { title, caption, image, body } = req.body;

        // check if project article exists
        let projectArticle = await ProjectArticle.findOne({title});

        if (projectArticle) {
            return res.status(400).json({message: "Project article already exists"});
        }

        // create new project article
        let slug = uuidv4();
        projectArticle = await ProjectArticle.create({
            title, caption, slug, image, body
        });
        
        // title: { type: String, required: true},
        // caption: { type: String, required: true},
        // slug: { type: String, required: true, unique: true },
        // image: { type: String, required: true},
        // body: { type: String, required: true},

        return res.status(201).json({
            title: projectArticle.title,
            caption: projectArticle.caption,
            slug: projectArticle.slug,
            image: projectArticle.image,
            body: projectArticle.body,
        });
    } catch (error) {
        return res.status(500).json({message: "Project article creation failed"});
    }
}

export const getProjectArticle = async (req, res, next) => {
    try {
        const projectArticle = await ProjectArticle.findOne({slug: req.params.slug});

        if (!projectArticle) 
        {
            const error = new Error("Project article was not found");
            return next(error);
        }

        return res.json(projectArticle);
    } catch (error) {
        next(error);
    }
}

export const getAllProjectArticles = async (req, res, next) => {
    try {
        const projectArticles = await ProjectArticle.find({});

        res.json(projectArticles);
    } catch (error) {
        next(error);
    }
}