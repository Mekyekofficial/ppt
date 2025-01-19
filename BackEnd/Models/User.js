const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        unique: true ,
        sparse: true,
    },
    password: {
        type: String,
    },
    profilePhoto: {
        type: String,
    },
    gender: {
        type: String,
    },
    country : {
        type: String,
    },
});

const UserModal = mongoose.model('users', UserSchema);
module.exports = UserModal;