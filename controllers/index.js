const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const route = express.Router();
const {User} = require('../models');
const user = new User();

route.get('^/$|/portfolio', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

route.get('/home', (req, res) => {
    user.fetchHomePage(req, res);
});

route.get('/about', (req, res) => {
    user.fetchDetails(req, res);
});

route.get('/resumeWork', (req, res) => {
    user.fetchWork(req, res);
});

route.get('/resumeEducation', (req, res) => {
    user.fetchEducation(req, res);
});

route.get('/projects', (req, res) => {
    user.fetchProjects(req, res);
});

route.get('/testimonials', (req, res) => {
    user.fectchTestimonials, (req, res);
});

module.exports = route;