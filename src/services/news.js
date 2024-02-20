import axios from "axios";

export const getAllNewsArticles = async () => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/news");
        return data
    } catch (error) {
        if (error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
}

export const getNewsArticle = async ( {slug} ) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/news/${slug}`);
        return data
    } catch (error) {
        if (error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
}