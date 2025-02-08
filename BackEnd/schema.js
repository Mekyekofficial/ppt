const joi = require('joi');
const { use } = require('./Routes/CompanyRouter');

const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    dob: joi.date().optional(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().pattern(/^\d+$/).optional(), // Ensures numeric input as a string
    password: joi.string().min(6).required(),
    profilePhoto: joi.string().optional(),
    country: joi.string().optional(),
    gender: joi.string().valid("Male", "Female", "Other").optional(),
});

const newsSchema = joi.object({
    content: joi.string().required().messages({
        "string.empty": "Content is required."
    }),
    date: joi.date().default(() => new Date()), // Ensures a default date
    newsPhoto: joi.string().optional(),
    author: joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        profilePhoto: joi.string().optional(),
    }).required(),
});

const eventSchema = joi.object({
    eventType: joi.string().valid("local", "seminar", "cultural").required().messages({
        "any.only": "Event type must be 'local', 'seminar', or 'cultural'.",
        "string.empty": "Event type is required."
    }),
    eventName: joi.string().required().messages({
        "string.empty": "Event name is required."
    }),
    eventImage: joi.string().optional(),
    location: joi.string().required().messages({
        "string.empty": "Location is required."
    }),
    date: joi.date().required().messages({
        "date.base": "Invalid date format.",
        "any.required": "Date is required."
    }),
    time: joi.string().required().messages({
        "string.empty": "Time is required."
    }),
    author: joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        profilePhoto: joi.string().optional(),
    }).required(),
});

const jobSchema = joi.object({
    qualifications: joi.string().required().messages({
        "string.empty": "Qualifications are required."
    }),
    location: joi.string().required().messages({
        "string.empty": "Location is required."
    }),
    jobBenefits: joi.string().optional(),
    jobDescription: joi.string().required().messages({
        "string.empty": "Job description is required."
    }),
    role: joi.string().required().messages({
        "string.empty": "Role is required."
    }),
    industryType: joi.string().required().messages({
        "string.empty": "Industry type is required."
    }),
    department: joi.string().required().messages({
        "string.empty": "Department is required."
    }),
    employmentType: joi.string().valid("Full-time", "Part-time", "Remote").required().messages({
        "any.only": "Employment type must be 'Full-time', 'Part-time', or 'Remote'.",
        "string.empty": "Employment type is required."
    }),
    roleCategory: joi.string().required().messages({
        "string.empty": "Role category is required."
    }),
    salary: joi.string().required().messages({
        "string.empty": "Salary is required."
    }),
    experience: joi.string().required().messages({
        "string.empty": "Experience is required."
    }),
    jobType: joi.string().valid("Permanent", "Contract", "Internship").required().messages({
        "any.only": "Job type must be 'Permanent', 'Contract', or 'Internship'.",
        "string.empty": "Job type is required."
    }),
    postedOn: joi.date().default(() => new Date()).messages({
        "date.base": "Invalid date format."
    }),
    company : joi.object({
        companyName: joi.string().required(),
        companyEmail: joi.string().email().required(),
        companyLogo: joi.string().optional(),
    }).required(),
});

const companyRegistrationSchema = joi.object({
    companyName: joi.string().messages({
        "string.empty": "Company name is required."
    }),
    address: joi.string().messages({
        "string.empty": "Address is required."
    }),
    email: joi.string().email().messages({
        "string.empty": "Email is required.",
        "string.email": "Invalid email format."
    }),
    motto: joi.string().optional(),
    website: joi.string().uri().optional().messages({
        "string.uri": "Invalid website URL."
    }),
    domain: joi.string().optional(),
    gstNumber: joi.string().optional(), // Verification is optional
    corporateId: joi.string().optional(), // Verification is optional
    companyLogo: joi.string().optional(), // Image URL for logo
    userId: joi.string(),
});

module.exports = { userSchema, newsSchema, eventSchema, jobSchema, companyRegistrationSchema };

