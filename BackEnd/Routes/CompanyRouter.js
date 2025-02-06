const express = require("express");
const multer = require("multer");

const { registerCompany } = require("../Controllers/CompanyController");
const { companyValidation } = require("../Middlewares/CompanyValidation");

const router = express.Router();

// ✅ Multer Configuration
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // ✅ Limit file size to 2MB
    fileFilter: (req, file, cb) => {
        // ✅ Allow only JPEG, PNG, WebP images
        if (!file.mimetype.match(/^image\/(jpeg|png|webp)$/)) {
            return cb(new Error("Only JPEG, PNG, and WebP images are allowed"));
        }
        cb(null, true);
    },
});

// ✅ Route with Improved Error Handling
router.post(
    "/register",
    (req, res, next) => {
        upload.single("companyLogo")(req, res, (err) => {
            if (err) {
                return res.status(400).json({ message: err.message, success: false });
            }
            next();
        });
    },
    (req, res, next) => {
        if (!req.file) {
            return res.status(400).json({ message: "No company logo file received", success: false });
        }
        next();
    },
    companyValidation,
    registerCompany
);

module.exports = router;
