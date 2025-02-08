const NewsModel = require('../models/News');
const EventModel = require('../models/Event');
const JobModel = require('../models/Job');
const wrapAsync = require('../utils/wrapAsync');

// POST News
const postNews = wrapAsync(async (req, res) => {
    console.log("Processing News Post...");

    if (!req.body.content) {
        return res.status(400).json({ message: "Content is required.", success: false });
    }

    const news = new NewsModel({
        content: req.body.content,
        author: {
            firstName: req.body.firstName || "Unknown",
            lastName: req.body.lastName || "Unknown",
            profilePhoto: req.body.userPhoto || "",
        },
        newsPhoto: req.file ? `data:image/png;base64,${req.file.buffer.toString("base64")}` : null,
    });

    const savedNews = await news.save();
    console.log("✅ News saved successfully:", savedNews);

    res.status(201).json({ message: 'News created successfully', success: true, news: savedNews });
});

// GET News
const getNews = wrapAsync(async (req, res) => {
    const news = await NewsModel.find({});
    res.status(200).json(news);
});

// POST Event
const postEvents = wrapAsync(async (req, res) => {
    console.log("Processing Event Post...");

    const { eventType, eventName, location, date, time } = req.body;

    if (!eventType || !eventName || !location || !date || !time) {
        return res.status(400).json({ message: "All event fields are required.", success: false });
    }

    const event = new EventModel({
        eventType,
        eventName,
        eventImage: req.file ? `data:image/png;base64,${req.file.buffer.toString("base64")}` : null,
        location,
        date,
        time,
        author: {
            firstName: req.body.firstName || "Unknown",
            lastName: req.body.lastName || "Unknown",
            profilePhoto: req.body.userPhoto || "",
        },
    });

    const savedEvent = await event.save();
    console.log("✅ Event saved successfully:", savedEvent);

    res.status(201).json({ message: 'Event created successfully', success: true, event: savedEvent });
});

// GET Events
const getEvents = wrapAsync(async (req, res) => {
    const events = await EventModel.find({});
    res.status(200).json(events);
});

// POST Job
const postJob = wrapAsync(async (req, res) => {
    console.log("Processing Job Post...");
    console.log("Request body:", req.body);
    const {
        qualifications,
        location,
        jobBenefits,
        jobDescription,
        role,
        industryType,
        department,
        employmentType,
        roleCategory,
        salary,
        experience,
        jobType,
        postedOn,
        companyName,
        companyLogo,
        companyEmail,
    } = req.body;

    console.log("Validating req body:");

    // Validate required fields
    if (!role || !industryType || !employmentType || !location || !jobDescription) {
        console.log("❌ Missing required job fields.");
        return res.status(400).json({ message: "Missing required job fields.", success: false });
    }

    const job = new JobModel({
        qualifications,
        location,
        jobBenefits,
        jobDescription,
        role,
        industryType,
        department,
        employmentType,
        roleCategory,
        salary,
        experience,
        jobType,
        postedOn: postedOn || new Date(),
        company: {
            companyName,
            companyLogo,
            companyEmail,
        }
    });

    const savedJob = await job.save();
    console.log("✅ Job saved successfully:");

    res.status(201).json({ message: 'Job created successfully', success: true, job: savedJob });
});

// GET Jobs
const getJobs = wrapAsync(async (req, res) => {
    const jobs = await JobModel.find({});
    res.status(200).json(jobs);
});

module.exports = { getNews, postNews, getEvents, postEvents, getJobs, postJob };
