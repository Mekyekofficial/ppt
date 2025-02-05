const { companyRegistrationSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");

const companyValidation = (req, res, next) => {
    console.log("Validating company registration...");

    const data = {
        companyName: req.body.companyName,
        companyLogo: req.file ? req.file.buffer.toString("base64") : undefined,
        address: req.body.address,
        email: req.body.companyEmail,
        motto: req.body.motto,
        website: req.body.website,
        domain: req.body.domain,
        gstNumber: req.body.gstNumber,
        corporateId: req.body.corporateId,
    };

    const { error } = companyRegistrationSchema.validate(data, { abortEarly: false });

    if (error) {
        return next(new ExpressError(error.details.map(err => err.message).join(", "), 400));
    }

    next();
};

module.exports = {companyValidation};
