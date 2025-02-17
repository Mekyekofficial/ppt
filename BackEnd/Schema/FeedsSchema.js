const joi = require("joi");

const feedSchema = joi.object({
    author: joi.object({
        firstName: joi.string().optional(),
        lastName: joi.string().optional(),
        profilePhoto: joi.string().optional()
    }),
    content: joi.string(),
    image: joi.string().default(null).optional(),
    createdAt: joi.date().default(Date.now)
});

module.exports = {feedSchema};