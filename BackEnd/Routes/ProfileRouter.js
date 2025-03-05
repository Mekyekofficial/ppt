const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinaryConfig");

const { profileValidation } = require('../Middlewares/ProfileValidation');
const { postProfile, getProfile, getAllProfiles } = require('../Controllers/ProfileController');
const { get } = require('mongoose');

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/profileImage", // Cloudinary folder
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

router.post('/update', (req, res, next) => {
    console.log("Request body:", req.body);
    next();
}, upload.single('certificate'), postProfile);

router.get('/get', getProfile);
router.get('/getAll', getAllProfiles);

module.exports = router;
