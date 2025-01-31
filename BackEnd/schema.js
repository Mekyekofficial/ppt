const joi = require('joi');

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

module.exports = { userSchema, newsSchema };
