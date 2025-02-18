const mongoose = require('mongoose');

const jobApplySchema = new mongoose.Schema({
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    resume: {
        type: Buffer,
        required: true
    },
    area: {
        type: String,
        required: true,
        trim: true
    },
    cityStateCountry: {
        type: String,
        required: true,
        trim: true
    },
    getEmailUpdates: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const JobApply = mongoose.model('JobApply', jobApplySchema);

module.exports = JobApply;