var db = require('../config/dbConnection.js');
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: { type: String, index: true, required: true },
	email: { type: String, index: true, required: true },
	password: { type: String, required: true },
	timestamp: { type: Date, default: Date.now }
});

const User = mongoose.model('User', schema);

module.exports = User;