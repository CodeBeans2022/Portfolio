const db = require('../config');

class User {

    fetchHomePage(req, res) {
        const fetchHomeQuery = `select homeID, homeImg, greeting, occupation from homePage;`; 

        db.query(fetchHomeQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data})
        });
    };

    fetchDetails(req, res) {
        const fetchDetailsQuery = `select aboutID, fullName, age, gender, nationality, devImg, bio from aboutPage;`;

        db.query(fetchDetailsQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data})
        });
    };

    fetchWork(req, res) {
        const fetchWorkQuery = `select WorkID, company, occupation, duration, location from workExperience;`;

        db.query(fetchWorkQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data})
        });
    };

    fetchEducation(req, res) {
        const fetchEducationQuery = `select EducationID, institution, course, duration, location from educationExperience;`;

        db.query(fetchEducationQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data})
        });
    };

    fetchProjects(req, res) {
        const fetchProjectsQuery = `select projectsID, siteImg, projectName, githubLink, netlifyLink from projects;`;

        db.query(fetchProjectsQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data})
        });
    };

    fectchTestimonials(req, res) {
        const fectchTestimonialsQuery = `select testimonialID, reviewerImg, fullName, testimonial from testimonialPage;`;

        db.query(fectchTestimonialsQuery, (err, data) => {
            if(err) throw err, console.log(err);
            else res.status(200).json({results: data})
        });
    };
};

module.exports = {User};
