import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import * as phonesCotrollers from './controllers/phonesController';


const router = express.Router();

const app = express();

app.use(cors());
app.use(express.json());

router.get('/', (req, res) => {
    res.json({
        'Home': 'Page',
    })
})

router.get('/phones', phonesCotrollers.getAllPhone)

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);