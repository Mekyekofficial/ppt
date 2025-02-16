const UserModal = require('../Models/User');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync');

// POST Profile
const postProfile = wrapAsync(async (req, res) => {
    console.log("Processing Profile Post...");

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        profilePhoto: req.body.profilePhoto,
        gender: req.body.gender,
        country: req.body.country,
        profileBanner: {
            location: req.body.profileBanner.location,
            description: req.body.profileBanner.description
        },
        about: req.body.about,
        workExperience: req.body.workExperience?.map(exp => ({
            title: exp.title,
            company: exp.company,
            location: exp.location,
            startDate: exp.startDate,
            endDate: exp.endDate,
            description: exp.description
        })),
        skills: req.body.skills?.map(skill => ({
            technicalKnowledge: skill.technicalKnowledge?.map(tech => ({
                language: tech.language,
                framework: tech.framework
            })),
            coreKnowledge: skill.coreKnowledge?.map(core => core),
            language: skill.language?.map(lang => lang)
        })),
        education: req.body.education?.map(edu => ({
            name: edu.name,
            stream: edu.stream,
            endDate: edu.endDate
        })),
        certificate: req.body.certificate?.map(cert => ({
            name: cert.name,
            issuedBy: cert.issuedBy,
            courseType: cert.courseType,
            duration: cert.duration,
            description: cert.description,
            photo: cert.photo
        }))
    };

    let user;
    user = await UserModal.findOne({ _id: req.body._id });
    if(user){
        await UserModal.findOneAndUpdate({ _id: req.body._id  }, data);
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
