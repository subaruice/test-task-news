import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import headlines from './router/headlines.ts'; 

dotenv.config()

const app = express();
const PORT = 3000;
app.use(cors({
    origin: '*'
}))
app.use(express.json())

app.use('/news', headlines)

app.listen(PORT, () => {
    console.log('server is running');
})