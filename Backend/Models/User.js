const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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
    image: {
        type: String,
    },
});

const UserModal = mongoose.model('users', UserSchema);
module.exports = UserModal;