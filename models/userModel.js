var db = require('../config/dbConnection.js');
const mongoose = require("mongoose");

//const User = mongoose.model('User', { username: String, email: String, password: String, timestamp: { type: Date, default: Date.now } });
//const Contact = mongoose.model('Contact', { name: String, email: String, phone: String, timestamp: { type: Date, default: Date.now }, User: mongoose.Schema.ObjectId });

const User = new mongoose.Schema({
	username: { type: String, index: true, required: true },
	email: { type: String, index: true, required: true },
	password: { type: String, required: true },
	timestamp: { type: Date, default: Date.now }
});

module.exports = User;