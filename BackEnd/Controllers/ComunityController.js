const { auth } = require('googleapis/build/src/apis/abusiveexperiencereport');
const ComunityModal = require('../Models/Comunity');
const wrapAsync = require('../utils/wrapAsync');

// POST Comunity

const createCommunity = async (req, res) => {
    console.log("Processing Comunity Post...");

    const newComunity = new ComunityModal({
        name: req.body.name,
        description: req.body.description,
        profilePhoto: req.file.buffer.toString('base64'),
        members: [
            {
                userId: req.body.userId,
                role: 'owner'
            }
        ]
    });

    try {
        const savedComunity = await newComunity.save();
        res.status(201).json(savedComunity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET Comunity

const getCommunity = async (req, res) => {
    console.log("Processing Comunity Get...");

    try {
        const comunity = await ComunityModal.find();
        res.status(200).json(comunity);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET Comunity by User Id

const getCommunitybyUserId = async (req, res) => {
    console.log("Processing Comunity Get by User Id...");
    const { _id } = req.query;
    try {
        const comunity = await ComunityModal.find({ 'members.userId': _id });
        res.status(200).json(comunity);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { createCommunity, getCommunity, getCommunitybyUserId };