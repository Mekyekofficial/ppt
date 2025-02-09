const wrapAsync = require("../utils/wrapAsync");
const CompanyJobModel = require("../Models/ATS/CompanyJobs");
const JobApplicationModel = require("../Models/JobApplication");

// GET Company Jobs
const getCompanyJobs = wrapAsync(async (req, res) => {
    const { companyId } = req.query;

    if (!companyId) {
        return res.status(400).json({ error: "Company ID is required." });
    }

    const jobs = await CompanyJobModel.find({ companyId });

    if (!jobs.length) {
        return res.status(404).json({ message: "No jobs found for this company." });
    }

    res.status(200).json(jobs);
});

// GET Applicants
const getApplicants = wrapAsync(async (req, res) => {
    const { jobId } = req.query;

    if (!jobId) {
        return res.status(400).json({ error: "Job ID is required." });
    }
    
    const jobs = await JobApplicationModel.find({ jobID: jobId });

    if (!jobs) {
        return res.status(404).json({ message: "Job not found." });
    }

    res.status(200).json(jobs);
});

module.exports = { getCompanyJobs, getApplicants };
