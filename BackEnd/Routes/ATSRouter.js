const express = require('express');
const { getCompanyJobs } = require('../Controllers/ATSController');

const router = express.Router();

router.get('/get-company-jobs', getCompanyJobs);

module.exports = router;
