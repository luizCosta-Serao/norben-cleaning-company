const mongoose = require('mongoose');

const ContactDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model('Contact', ContactDataSchema);