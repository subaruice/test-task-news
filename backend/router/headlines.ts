import express from 'express';
import NewsApi from 'newsapi';

const key = process.env.NEWS_API_KEY

const newsapi = new NewsApi('2549223838eb4e008352ae8138a6b2fc')

const router = express.Router();

router.get('/news/headlines', async (req, res) => {
    try{
        const result = await newsapi.v2.topHeadlines({
            country: 'us',
            pageSize: 30,
        })
        res.json(result)
    }catch(err){
        console.error(err)
    }
})


export default router;