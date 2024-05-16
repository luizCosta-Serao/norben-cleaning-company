const Contact = require('../model/ContactData');

module.exports = {
  async create(req, res) {
    const {
      firstName,
      lastName,
      email,
      phone,
      message
    } = req.body;

    if (!firstName) {
      return res.status(400).json({
        error: 'provide your first name'
      });
    };

    if (!lastName) {
      return res.status(400).json({
        error: 'provide your last name'
      });
    };

    if (!email) {
      return res.status(400).json({
        error: 'provide your email'
      });
    };

    if (!phone) {
      return res.status(400).json({
        error: 'provide your phone'
      });
    };

    if (!message) {
      return res.status(400).json({
        error: 'provide your message'
      });
    };

    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    return res.status(200).json(newContact);
  }
}