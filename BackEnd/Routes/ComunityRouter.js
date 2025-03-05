const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinaryConfig");

const { createCommunity, getCommunity, getCommunitybyUserId } = require('../Controllers/ComunityController');
const { communityValidation } = require('../Middlewares/ComunityValidation');


const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/comunityLogo", // Cloudinary folder
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

router.post('/post', upload.single('file'), (req, res, next) => {
    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, createCommunity);

router.get('/get', getCommunity);

router.get('/getWithUserId', getCommunitybyUserId);


module.exports = router;