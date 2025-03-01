const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    content: {
        type: String,
        required: true
    },
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
    date: {
        type: Date,
        default: Date.now
    },
    newsPhoto: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    likeBy: [
        {
            type: Schema.Types.ObjectId,
                ref: 'User'
        }
    ],
    comments: [
        {
            comment: {
                type: String,
                required: true
            },
            commenter: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            userName: {
                type: String
            },
        }
    ]
});

const NewsModel = mongoose.model('News', NewsSchema);
module.exports = NewsModel;
