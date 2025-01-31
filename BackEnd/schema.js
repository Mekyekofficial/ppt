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

module.exports = { userSchema, newsSchema, eventSchema };
