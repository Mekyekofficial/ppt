const express = require('express');
const multer = require('multer');

const { postFeed } = require('../Controllers/FeedsController');
const { feedValidation } = require('../Middlewares/FeedValidation');

const router = express.Router();


// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/post', upload.single('file'), (req, res, next) => {
    console.log("Processing Feed Post...");
    console.log("Req Body", req.body);
    console.log("Req File", req.file);
    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, postFeed);


module.exports = router;