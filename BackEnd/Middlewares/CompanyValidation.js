const { companyRegistrationSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");

const companyValidation = (req, res, next) => {
    console.log("Validating company registration...");

    const data = {
        companyName: req.body.companyName,
        companyLogo: req.file ? req.file.buffer.toString("base64") : undefined,
        address: req.body.address,
        email: req.body.email,
        motto: req.body.motto,
        website: req.body.website,
        domain: req.body.domain,
        gstNumber: req.body.gstNumber,
        corporateId: req.body.corporateId,
        userId: Array.isArray(req.body.userId) ? req.body.userId[0] : req.body.userId || "",
    };
    // console.log('schema',companyRegistrationSchema)
    // const { error } = companyRegistrationSchema.validate(data, { abortEarly: false });
    // console.log('data',data)
    // if (error) {
    //     console.log("❌ Company registration validation failed:", error);
    //     return next(new ExpressError(error.details.map(err => err.message).join(", "), 400));
    // }
    // console.log("✅ Company registration data is valid");
    next();
};



module.exports = {companyValidation};
