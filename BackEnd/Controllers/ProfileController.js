const UserModal = require('../Models/User');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync');

// POST Profile
const postProfile = wrapAsync(async (req, res) => {
    console.log("Processing Profile Post...");
    console.log(req.body);

    // Initialize an empty object for the data
    const data = {};

    // Dynamically add fields to the data object if they exist in req.body
    if (req.body.userId) data.userId = req.body.userId;
    if (req.body.profileImage) data.profilePhoto = req.body.profileImage;
    if (req.body.location) data.profileBanner = { location: req.body.location };
    if (req.body.description) data.profileBanner = { ...data.profileBanner, description: req.body.description };

    // You can continue adding more fields dynamically as needed
    if (req.body.firstName) data.firstName = req.body.firstName;
    if (req.body.lastName) data.lastName = req.body.lastName;
    if (req.body.dob) data.dob = req.body.dob;
    if (req.body.email) data.email = req.body.email;
    if (req.body.phoneNumber) data.phoneNumber = req.body.phoneNumber;
    if (req.body.password) data.password = req.body.password;
    if (req.body.gender) data.gender = req.body.gender;
    if (req.body.country) data.country = req.body.country;
    if (req.body.about) data.about = req.body.about;

    // Parse experiences if it's a stringified JSON
    if (req.body.experiences) {
        try {
            const experiences = JSON.parse(req.body.experiences); // Parse string to array
            data.workExperience = experiences.map(exp => ({
                title: exp.title,
                company: exp.company,
                startDate: exp.startDate,
                endDate: exp.endDate,
                description: exp.description,
                jobType: exp.jobType
            }));
        } catch (error) {
            console.error("Error parsing experiences:", error);
            return res.status(400).json({ error: "Invalid experiences format" });
        }
    }

    // Only map skills if they exist
    if (req.body.skills) {
        try {
        const skills = JSON.parse(req.body.skills);
        data.skills = req.body.skills.map(skill => ({
            technicalKnowledge: skill.technicalKnowledge?.map(tech => ({
                language: tech.language,
                framework: tech.framework
            })),
            coreKnowledge: skill.coreKnowledge?.map(core => core),
            language: skill.language?.map(lang => lang)
        }));
    } catch (error) {
        console.error("Error parsing skills:", error);
        return res.status(400).json({ error: "Invalid skills format" });
    }

    // Only map education if it exists
    if (req.body.education) {
        data.education = req.body.education.map(edu => ({
            name: edu.name,
            stream: edu.stream,
            endDate: edu.endDate
        }));
    }

    // Only map certificates if they exist
    if (req.body.certificate) {
        data.certificate = req.body.certificate.map(cert => ({
            name: cert.name,
            issuedBy: cert.issuedBy,
            courseType: cert.courseType,
            duration: cert.duration,
            description: cert.description,
            photo: cert.photo
        }));
    }

    console.log("Data:", data);

    // Find and update the user if they exist, otherwise create a new user
    let user;
    user = await UserModal.findOne({ _id: data.userId });
    
    if (user) {
        await UserModal.findOneAndUpdate({ _id: data.userId }, data);
    } else {
        user = await UserModal.create(data);
    }

    res.status(201).json(user);
});



const getProfile = wrapAsync(async (req, res) => {
    const id = req.query._id;
    const user = await UserModal.findOne({_id: id});
    res.status(200).json(user);
});

module.exports = { postProfile, getProfile };
