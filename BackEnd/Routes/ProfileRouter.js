const express = require('express');
const multer = require('multer');

const { profileValidation } = require('../Middlewares/ProfileValidation');
const { postProfile, getProfile } = require('../Controllers/ProfileController');
const { get } = require('mongoose');

const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/update', upload.array('certificate'), (req, res, next) => {
    next();
},profileValidation, postProfile);

router.get('/get', getProfile);

module.exports = router;
