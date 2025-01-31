const { newsSchema, eventSchema } = require('../schema');
const ExpressError = require('../utils/ExpressError');

const newsValidation = (req, res, next) => {
    console.log("Validating news:");
    // ✅ Ensure `req.body` contains expected data
    const data = {
        content: req.body.content,
        author: {
            firstName: req.body.firstName || "",
            lastName: req.body.lastName || "",
            profilePhoto: req.body.userPhoto || "",
        },
        newsPhoto: req.file ? req.file.buffer.toString("base64") : undefined,
    };

    const { error } = newsSchema.validate(data, { abortEarly: false });

    if (error) {
        return next(new ExpressError(error.details.map(err => err.message).join(', '), 400));
    }

    next();
};


const eventValidation = (req, res, next) => {
    console.log("Validating event:");

    // ✅ Ensure `req.body` contains expected data
    const data = {
        author: {
            firstName: req.body.firstName || "",
            lastName: req.body.lastName || "",
            profilePhoto: req.body.userPhoto || "",
        },
        eventType: req.body.eventType,
        eventName: req.body.eventName,
        eventImage: req.file ? req.file.buffer.toString("base64") : undefined,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
    };

    const { error } = eventSchema.validate(data, { abortEarly: false });

    if (error) {
        return next(new ExpressError(error.details.map(err => err.message).join(', '), 400));
    }

    next();
};



module.exports = { newsValidation, eventValidation };
