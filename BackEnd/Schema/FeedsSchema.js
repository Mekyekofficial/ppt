const joi = require("joi");

const feedSchema = joi.object({
    author: joi.object({
        firstName: joi.string(),
        lastName: joi.string(),
        profilePhoto: joi.string().optional()
    }),
    content: joi.string(),
    image: joi.string().default(null),
    createdAt: joi.date().default(Date.now)
});

module.exports = {feedSchema};