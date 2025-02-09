const wrapAsync = require("../utils/wrapAsync");
const CompanyJobModel = require("../Models/ATS/CompanyJobs");

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

module.exports = { getCompanyJobs };
