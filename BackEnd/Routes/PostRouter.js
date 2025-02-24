const express = require('express');
const multer = require('multer');
const { getNews, postNews, getEvents, getEventsById, postEvents, postJob, getJobs, getJobById } = require('../Controllers/PostController');
const { newsValidation, eventValidation, jobValidation } = require('../Middlewares/PostValidation');

const router = express.Router();

// ✅ Configure Multer to handle file uploads (store in memory for now)
const storage = multer.memoryStorage(); 
const upload = multer({ storage });


router.post('/news', upload.single('newsPhoto'), (req, res, next) => {

    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, newsValidation, postNews);

router.get('/news', getNews);

router.post('/event', upload.single('eventImage'), (req, res, next) => {
    console.log("Processing Event Post...");
    if (!req.file) {
        console.error("❌ File upload failed! No file received.");
    }

    next();
}, eventValidation, postEvents);

router.get('/events', getEvents);
router.get('/events/:eventId', getEventsById);

router.post('/job',upload.none(), (req, res, next ) => {
    console.log("Processing Job Post...");
    console.log("req.body", req.body);
    next();
}, jobValidation, postJob);

router.get('/jobs', getJobs);
router.get("/jobs/:jobId", getJobById);

module.exports = router;
