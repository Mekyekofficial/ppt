const wrapAsync = require("../utils/wrapAsync");
const CompanyJobModel = require("../Models/ATS/CompanyJobs");
const JobApplicationModel = require("../Models/JobApplication");

// GET Company Jobs
const getCompanyJobs = wrapAsync(async (req, res) => {
    const { companyId, jobType } = req.query;

    if (!companyId) {
        console.log("Company ID is missing.");
        return res.status(400).json({ error: "Company ID is required." });
    }

    if (!jobType) {
        console.log("Job Type is missing.");
        return res.status(400).json({ error: "Job Type is required." });
    }

    let jobs;

    if (jobType == "All") {
        jobs = await CompanyJobModel.find({ companyId: companyId });
    } else {
        jobs = await CompanyJobModel.find({ companyId: companyId, jobType: jobType });
    }

    if (!jobs.length) {
        console.log("No jobs found for this company.");
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

// 

module.exports = { getCompanyJobs, getApplicants };
