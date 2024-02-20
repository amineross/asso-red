import { Schema, model } from "mongoose";

const ProjectArticleSchema  = new Schema(
    {
        title: { type: String, required: true},
        caption: { type: String, required: true},
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true},
        body: { type: String, required: true},
    }
);

const ProjectArticle = model("ProjectArticle", ProjectArticleSchema);
export default ProjectArticle;