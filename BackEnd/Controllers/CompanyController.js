const CompanyModel = require("../models/Company");
const JobApplicationModel = require('../Models/JobApplication');
const CompanyJobModel = require('../Models/ATS/CompanyJobs');
const wrapAsync = require("../utils/wrapAsync");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const env = require('dotenv');


// Register Company
const registerCompany = wrapAsync(async (req, res) => {
    console.log("🚀 Processing Company Registration...");

    let { 
        companyName, 
        email,
        address, 
        motto, 
        website, 
        domain, 
        gstNumber, 
        corporateId,
        userId,
    } = req.body;

    // Validate required fields
    if (!companyName || !email || !address) {
        console.log("❌ Required fields are missing.");
        return res.status(400).json({ message: "Required fields are missing.", success: false });
    }

    // Check if company already exists
    const existingCompany = await CompanyModel.findOne({ email });
    if (existingCompany) {
        console.log("❌ Company with this email already exists.");
        return res.status(400).json({ message: "Company with this email already exists.", success: false });
    }

    // Process company logo
    let companyLogo = null;
    if (req.file) {
        companyLogo = `data:image/png;base64,${req.file.buffer.toString("base64")}`;
    }

    let newUserId;
    if (Array.isArray(userId)) {
        newUserId = userId[0];
        userId = newUserId;
    }
    // Create and save the company
    const newCompany = new CompanyModel({
        companyName,
        email,
        address,
        motto,
        website,
        domain,
        gstNumber,
        corporateId,
        companyLogo,
        userId,
    });

    const savedCompany = await newCompany.save();

    let company = await CompanyModel.findOne({ email });

    const { _id } = company;

    const companyToken = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
    console.log("🚀 Company registered successfully!");
    res.status(201).json({ message: "Company registered successfully!", success: true, companyToken, company: savedCompany, companyID: _id });
});

// Apply for Job
const applyForJob = wrapAsync(async (req, res) => {
    console.log("🚀 Processing Job Application...");

    let { 
        jobID,
        firstName,
        lastName,
        email,
        phoneNumber,
        resume,
        area,
        cityStateCountry,
        getEmailUpdates
    } = req.body;

    // Validate required fields
    if (!jobID || !firstName || !lastName || !email || !phoneNumber) {
        console.log("❌ Required fields are missing.");
        return res.status(400).json({ message: "Required fields are missing.", success: false });
    }

    // Process resume
    let resumeData = null;
    if (req.file) {
        resumeData = `data:application/pdf;base64,${req.file.buffer.toString("base64")}`;
    }

    // Create and save the job application
    const newJobApplication = new JobApplicationModel({
        jobID,
        firstName,
        lastName,
        email,
        phoneNumber,
        resume: resumeData,
        area,
        cityStateCountry,
        getEmailUpdates
    });

    const savedJobApplication = await newJobApplication.save();

    // ✅ Update totalCandidates array in CompanyJobModel
    await CompanyJobModel.findOneAndUpdate(
        { jobId: jobID },  // Find the company job by jobId
        { $push: { totalCandidates: savedJobApplication._id } }, // Push application ID into totalCandidates array
        { new: true } // Return the updated document
    );

    console.log("🚀 Job application submitted successfully!");
    res.status(201).json({ message: "Job application submitted successfully!", success: true, jobApplication: savedJobApplication });
});

module.exports = { registerCompany, applyForJob };