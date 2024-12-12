const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
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
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password, phoneNumber } = req.body;

        const user = await UserModel.findOne({ email, phoneNumber });

        if (!user) {
            return res.status(403).json({ message: 'User not found', success: false });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({ message: 'Invalid credentials', success: false });
        }

        const jwtToken = jwt.sign({ email, phoneNumber }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token: jwtToken, success: true, email, phoneNumber, name: user.name });

    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error', success: false });
    }

}


module.exports = {
    signup,
    login
}