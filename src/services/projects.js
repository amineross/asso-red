import axios from "axios";

export const getAllProjectsArticles = async () => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/projects");
        return data
    } catch (error) {
        if (error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
}

export const getProjectsArticle = async ( {slug} ) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/projects/${slug}`);
        return data
    } catch (error) {
        if (error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
}