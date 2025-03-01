const express = require('express');
const multer = require('multer');

const { createCommunity, getCommunity, getCommunitybyUserId } = require('../Controllers/ComunityController');
const { communityValidation } = require('../Middlewares/ComunityValidation');


const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/post', upload.single('file'), (req, res, next) => {
    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, createCommunity);

router.get('/get', getCommunity);

router.get('/getWithUserId', getCommunitybyUserId);


module.exports = router;