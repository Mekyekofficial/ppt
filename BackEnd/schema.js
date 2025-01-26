const joi = require('joi');

const userSchema = joi.object({
    firstName: joi.string(),
    lastName: joi.string(),
    dob: joi.date(),
    email: joi.string().email(),
    phoneNumber: joi.number(),
    password: joi.string(),
    profilePhoto: joi.string(),
    country: joi.string(),
    gender: joi.string(),
});

module.exports = userSchema;