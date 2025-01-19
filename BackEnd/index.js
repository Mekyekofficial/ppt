const express = require('express');
const app = express();
const ExpressError = require('./utils/ExpressError');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');


require('dotenv').config();

require('./mongodb');

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use('/auth', AuthRouter);

app.use((err, req, res, next) => {
    let {statusCode, message} = err;
    res.status(statusCode || 500).json({
        message: message || 'Internal Server Error'
    });
});


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});