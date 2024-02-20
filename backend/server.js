import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import newsArticleRoutes from './routes/newsArticleRoutes.js';
import projectArticleRoutes from './routes/projectArticleRoutes.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is running...");
})

app.use('/api/users', userRoutes);
app.use('/api/news', newsArticleRoutes);
app.use('/api/projects', projectArticleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))