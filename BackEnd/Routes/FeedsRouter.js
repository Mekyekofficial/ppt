const express = require('express');
const multer = require('multer');

const { postFeed } = require('../Controllers/FeedsController');
const { feedValidation } = require('../Middlewares/FeedValidation');

const router = express.Router();


// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/post', upload.single('feedImage'), (req, res, next) => {

    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, feedValidation, postFeed);


module.exports = router;