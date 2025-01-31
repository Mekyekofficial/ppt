const express = require('express');
const multer = require('multer');
const { getNews, postNews } = require('../Controllers/PostController');
const { newsValidation } = require('../Middlewares/PostValidation');

const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// ✅ Log request data to debug the issue
router.post('/news', upload.single('newsPhoto'), (req, res, next) => {

    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, newsValidation, postNews);

router.get('/news', getNews)

module.exports = router;
