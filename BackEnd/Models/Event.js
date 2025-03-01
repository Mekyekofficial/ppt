const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    author: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        profilePhoto: {
            type: String,
        },
        _id: {
            type: String,
            required: true
        }
    },
    eventType: {
        type: String,
        required: true,
        enum: ['local', 'seminar', 'cultural']
    },
    eventName: {
        type: String,
        required: true
    },
    eventImage: {
        type: String, // Store image URL (uploaded to a storage service or locally)
        default: null
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
