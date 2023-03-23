const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, index: true, required: true },
  email: { type: String, index: true, required: true },
  phone: { type: String },
  User: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", schema);

module.exports = Contact;
