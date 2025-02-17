const express = require("express");
const multer = require("multer");

const { registerCompany, applyForJob, getCompanyByUserId } = require("../Controllers/CompanyController");
const { companyValidation, jobApplyValidation } = require("../Middlewares/CompanyValidation");

const router = express.Router();

// ✅ Multer Configuration
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // ✅ 2MB file size limit
    fileFilter: (req, file, cb) => {
        console.log("Received file:", file.mimetype); // ✅ Debugging log

        // ✅ Allow PDFs and images (JPEG, PNG, WebP)
        if (!file.mimetype.match(/^(image\/(jpeg|png|webp)|application\/pdf)$/)) {
            return cb(new Error("Only JPEG, PNG, WebP images, and PDF files are allowed"));
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

// route for company data
router.get("/get", getCompanyByUserId);

// route for job application
router.post(
    "/job-apply",
    (req, res, next) => {
        console.log("Middleware: Before File Upload");
        upload.single("resume")(req, res, (err) => {
            console.log("Middleware: After File Upload");
            if (err) {
                console.log("❌ Error uploading file:", err.message);
                return res.status(400).json({ message: err.message, success: false });
            }
            next();
        });
    },
    (req, res, next) => {
        console.log("Middleware: Checking File");
        if (!req.file) {
            return res.status(400).json({ message: "No resume file received", success: false });
        }
        next();
    },
    jobApplyValidation,
    applyForJob
);

module.exports = router;
