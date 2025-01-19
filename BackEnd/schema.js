const joi = require('joi');

const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    dob: joi.date().required(),
    email: joi.string().required().email(),
    phoneNumber: joi.number().required(),
    password: joi.string().required(),
    profilePhoto: joi.string(),
    country: joi.string(),
    gender: joi.string(),
});

module.exports = userSchema;