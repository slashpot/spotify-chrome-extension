const express = require('express');
const helment = require('helmet');

const app = express();
const port = 3001;

app.use(helment());
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`server is listening on port ${port}`))