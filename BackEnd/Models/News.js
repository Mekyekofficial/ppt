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
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    newsPhoto: {
        type: String,
    }
});

const NewsModel = mongoose.model('News', NewsSchema);
module.exports = NewsModel;
