import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { sendAuthReq, sendRefreshReq } from './util';

const app = express();
const port = 3001;

app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    sendAuthReq(req.query.code)
        .then(response => res.json(response.data))
        .catch(err => res.json(err.response.data));
})

app.post('/refreshtoken', (req, res) => {
    sendRefreshReq(req.body.refresh_token)
        .then(response => res.json(response.data))
        .catch(err => res.json(err.response.data));
})

app.listen(port, () => console.log(`server is listening on port ${port}`))