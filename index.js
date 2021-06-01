const express = require('express');

const app = express();
const port = 3000;

const expressConfig = require('./config/express');

const router = require('./routes');

expressConfig(app);

app.use(router);

app.listen(port, () => console.log('Server is listening on port 3000 ...'));