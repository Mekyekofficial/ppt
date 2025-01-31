const NewsModel = require('../models/News');
const wrapAsync = require('../utils/wrapAsync');

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
        newsPhoto: req.file ? `data:image/png;base64,${req.file.buffer.toString("base64")}` : null, // ✅ Convert to base64
    });

    const savedNews = await news.save();
    console.log("✅ News saved successfully:");

    res.status(201).json({ message: 'News created successfully', success: true, news: savedNews });
});


const getNews = wrapAsync(async (req, res) => {
    const news = await NewsModel.find({});
    res.status(200).json(news);
});

module.exports = { getNews, postNews };
