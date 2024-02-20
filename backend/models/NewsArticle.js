import { Schema, model } from "mongoose";

const NewsArticleSchema  = new Schema(
    {
        title: { type: String, required: true},
        caption: { type: String, required: true},
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true},
        body: { type: String, required: true},
    }
);

const NewsArticle = model("NewsArticle", NewsArticleSchema);
export default NewsArticle;