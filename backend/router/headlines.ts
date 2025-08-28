import express from "express";
import NewsApi from "newsapi";

const key = process.env.NEWS_API_KEY;

const newsapi = new NewsApi("2549223838eb4e008352ae8138a6b2fc");

const router = express.Router();

router.get("/headlines", async (req, res) => {
    try {
        const result = await newsapi.v2.topHeadlines({
            country: "us",
            pageSize: 30,
        });
        res.json(result);
    } catch (err) {
        console.error(err);
    }
});

router.get("/category/:categoryName", async (req, res) => {
    try {
        const categoryName = req.params.categoryName;
        const result = await newsapi.v2.topHeadlines({
            country: "us",
            pageSize: 30,
            category: categoryName
        });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'error'})
    }
});

export default router;
