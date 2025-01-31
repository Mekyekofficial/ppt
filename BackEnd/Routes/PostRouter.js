const express = require('express');
const multer = require('multer');
const { getNews, postNews, getEvents, postEvents } = require('../Controllers/PostController');
const { newsValidation, eventValidation } = require('../Middlewares/PostValidation');

const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage(); 
const upload = multer({ storage });


router.post('/news', upload.single('newsPhoto'), (req, res, next) => {

    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, newsValidation, postNews);

router.get('/news', getNews);

router.post('/event', upload.single('eventImage'), (req, res, next) => {
    console.log("Processing Event Post...");
    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, eventValidation, postEvents);

router.get('/events', getEvents);

module.exports = router;
