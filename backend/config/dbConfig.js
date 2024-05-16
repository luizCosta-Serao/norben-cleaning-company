const mongoose = require('mongoose');

const dbConfig = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l9glhbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connection = mongoose.connect(dbConfig);

module.exports = connection;