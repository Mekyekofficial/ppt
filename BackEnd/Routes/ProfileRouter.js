const express = require('express');
const multer = require('multer');



const { profileValidation } = require('../Middlewares/ProfileValidation');
const { postProfile } = require('../Controllers/ProfileController');



const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/profile', upload.array('certificate'), (req, res, next) => {
    next();
},profileValidation, postProfile);

module.exports = router;
