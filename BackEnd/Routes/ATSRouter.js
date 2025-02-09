const express = require('express');
const { getCompanyJobs, getApplicants } = require('../Controllers/ATSController');

const router = express.Router();

router.get('/get-company-jobs', getCompanyJobs);
router.get('/applicants', getApplicants);

module.exports = router;
