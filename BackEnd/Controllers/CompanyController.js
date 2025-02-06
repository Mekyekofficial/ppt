const CompanyModel = require("../models/Company");
const wrapAsync = require("../utils/wrapAsync");
const mongoose = require("mongoose");

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

    console.log("✅ Company registered successfully:");

    res.status(201).json({ message: "Company registered successfully!", success: true, company: savedCompany });
});

module.exports = { registerCompany };