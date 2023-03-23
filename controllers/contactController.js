const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const { contacts } = await Contact.find({
    User: new mongoose.Types.ObjectId(req.user.id),
  });
  res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const { contact } = await Contact.find({ user_id: req.user.id, id: req.id });
  res.status(200).json(contact);
});

//@desc Create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email) {
    res.status(400);
    throw new Error("Name and email are mandatory!");
  }

  const contact = await Contact.create({
    User: req.user.id,
    name,
    email,
    phone,
  });
  res.status(200).json({ contact: contact });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const { contacts } = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const { contacts } = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
