const { singupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { signup, login, googleLogin } = require('../Controllers/AuthController');

const router = require('express').Router();


router.post('/login', loginValidation, login);
router.get('/google', googleLogin);
router.post('/signup', singupValidation , signup);

module.exports = router;