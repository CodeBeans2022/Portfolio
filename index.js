const express = require('express');
const route = require('./controllers');
const cors = require('cors');
const port = parseInt(process.env.PORT) || 4000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(route);

app.use(
    cors(),
    express.json,
    express.urlencoded({extended: false})
);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});