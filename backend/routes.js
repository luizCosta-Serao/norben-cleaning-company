const express = require('express');
const routes = express.Router();

const ContactController = require('./controller/ContactController');

// Contact Route
routes.post('/contact', ContactController.create);

module.exports = routes;