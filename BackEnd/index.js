const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const ExpressError = require('./utils/ExpressError.js');
const authRoutes = require('./Routes/AuthRouter.js');
const postRoutes = require('./Routes/PostRouter.js');
const companyRoutes = require('./Routes/CompanyRouter.js');
const ATSRouter = require('./Routes/ATSRouter.js');
const profileRoutes = require('./Routes/ProfileRouter.js');
require('./mongodb.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/company', companyRoutes);
app.use('/ATS', ATSRouter);
app.use('/profile', profileRoutes);

app.get('/ping', (req, res) => res.send('PONG'));

// Global Error Handler
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
