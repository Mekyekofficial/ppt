const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const env = require('dotenv');
const wrapAsync = require('../utils/wrapAsync');
const { oauth2client } = require('../utils/googleconfig');


const signup = wrapAsync(async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    
    const user = await UserModel.findOne({ email, phoneNumber });

    if (user) {
        return res.status(409).json({ message: 'User already exists', success: false });
    }

    if (!name || !email || !password || !phoneNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ name, email, password: hashedPassword, phoneNumber });
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User created successfully', success: true });
});

const login = wrapAsync(async (req, res) => {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(403).json({ message: 'User not found', success: false });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(403).json({ message: 'Invalid credentials', success: false });
    }

    const jwtToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

    res.status(200).json({ message: 'Login successful', token: jwtToken, success: true, email,name: user.name });
});

const googleLogin = wrapAsync(async (req, res) => {
    const { code } = req.query;

    const googleRes = await oauth2client.getToken(code);

    oauth2client.setCredentials(googleRes.tokens);
    
    const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    const { email, given_name, family_name, picture } = userRes.data;

    let user = await UserModel.findOne({ email });

    if (!user) {
        user = await UserModel.create({ firstName: given_name, lastName: family_name, email, image: picture });
    }

    const {_id} = user;

    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

    res.status(200).json({ message: 'Login successful', token, success: true, user }); 
});  

module.exports = {
    signup,
    login,
    googleLogin,
}