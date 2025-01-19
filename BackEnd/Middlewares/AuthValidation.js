const { userShcema } = require('../schema.js');
const ExpressError = require('../utils/ExpressError');

const singupValidation = (req, res, next) => {
    const result = userShcema.validate(req.body);
    if(result.error) {
        return next(new ExpressError(result.error.details[0].message, 400));
    }
    next();
}

const loginValidation = (req, res, next) => {
    const result = userShcema.validate(req.body);
    if(result.error) {
        return next(new ExpressError(result.error.details[0].message, 400));
    }
    next(); 
}

module.exports = {
    singupValidation,
    loginValidation
}