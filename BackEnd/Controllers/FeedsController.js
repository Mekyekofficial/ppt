const { auth } = require('googleapis/build/src/apis/abusiveexperiencereport');
const FeedsModal = require('../Models/Feed');


// POST Feed

const postFeed = async (req, res) => {
    console.log("Processing Feed Post...");

    const data = {
        content: req.body.content,
        author: {
            firstName: req.body.firstName || "Unknown",
            lastName: req.body.lastName || "Unknown",
            profilePhoto: req.body.profilePhoto || "",
        },
        image: req.file ? `data:image/png;base64,${req.file.buffer.toString("base64")}` : null,
        postOn: req.body.postOn,
    };

    const feed = new FeedsModal(data);

    const savedFeed = await feed.save();
    console.log("✅ Feed saved successfully:", savedFeed);

    res.status(201).json({ message: 'Feed created successfully', success: true, feed: savedFeed });
}

module.exports = { postFeed };