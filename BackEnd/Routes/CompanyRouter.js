const express = require('express');
const multer = require('multer');

const { registerCompany } = require('../Controllers/CompanyController');
const { companyValidation } = require('../Middlewares/CompanyValidation');

const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post('/register', upload.single('companyLogo'), (req, res, next) => {

    // Handle file upload failure
    if (!req.file) {
        return res.status(400).json({ message: "No company logo file received", success: false });
    }

    // Proceed to next middleware if file exists
    next();
}, companyValidation, registerCompany);


module.exports = router;
