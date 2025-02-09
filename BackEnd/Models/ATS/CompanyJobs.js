const mongoose = require('mongoose');

const CompanyJobSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  applicants: {
    type: Number,
    default: 0
  },
  postedOn: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: String,
    required: true
  },
  rejected: {
    type: Number,
    default: 0
  },
  onHold: {
    type: Number,
    default: 0
  },
  interviewed: {
    type: Number,
    default: 0
  },
  hired: {
    type: Number,
    default: 0
  },
  totalCandidates: {
    type: Number,
    default: 0
  },
  activeCandidates: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    required: true
  }
});

const CompanyJob = mongoose.model('CompanyJob', CompanyJobSchema);
module.exports = CompanyJob;
