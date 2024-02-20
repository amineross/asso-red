import NewsArticle from "../models/NewsArticle.js";
import {v4 as uuidv4} from 'uuid'

export const createNewsArticle = async (req, res) => {
    try {
        const { title, caption, image, body } = req.body;

        // check if news article exists
        let newsArticle = await NewsArticle.findOne({title});

        if (newsArticle) {
            return res.status(400).json({message: "News article already exists"});
        }

        // create new news article
        let slug = uuidv4();
        newsArticle = await NewsArticle.create({
            title, caption, slug, image, body
        });
        
        // title: { type: String, required: true},
        // caption: { type: String, required: true},
        // slug: { type: String, required: true, unique: true },
        // image: { type: String, required: true},
        // body: { type: String, required: true},

        return res.status(201).json({
            title: newsArticle.title,
            caption: newsArticle.caption,
            slug: newsArticle.slug,
            image: newsArticle.image,
            body: newsArticle.body,
        });
    } catch (error) {
        return res.status(500).json({message: "News article creation failed"});
    }
}

export const getNewsArticle = async (req, res, next) => {
    try {
        const newsArticle = await NewsArticle.findOne({slug: req.params.slug});

        if (!newsArticle) 
        {
            const error = new Error("News article was not found");
            return next(error);
        }

        return res.json(newsArticle);
    } catch (error) {
        next(error);
    }
}

export const getAllNewsArticles = async (req, res, next) => {
    try {
        const newsArticles = await NewsArticle.find({});

        res.json(newsArticles);
    } catch (error) {
        next(error);
    }
}