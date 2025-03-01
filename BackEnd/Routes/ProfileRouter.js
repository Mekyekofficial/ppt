const express = require('express');
const multer = require('multer');

const { profileValidation } = require('../Middlewares/ProfileValidation');
const { postProfile, getProfile, getAllProfiles } = require('../Controllers/ProfileController');
const { get } = require('mongoose');

const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/update', (req, res, next) => {
    console.log("Request body:", req.body);
    next();
}, upload.single('certificate'), postProfile);

router.get('/get', getProfile);
router.get('/getAll', getAllProfiles);

module.exports = router;
