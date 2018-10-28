import express from 'express';
import helmet from 'helmet';
import { sendAuthReq } from './util';

const app = express();
const port = 3001;

app.use(helmet());

app.get('/', (req, res) => {
    sendAuthReq(req.query.code)
        .then(response=>res.json(response.data))
        .catch(err=>res.json(err.response.data));
})
app.listen(port, () => console.log(`server is listening on port ${port}`))