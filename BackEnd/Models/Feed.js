const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    author: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        profilePhoto: {
            type: String,
        }
    },
    content: {
        type: String,
    },
    image: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const FeedModal = mongoose.model('Feed', feedSchema);

module.exports = FeedModal;
