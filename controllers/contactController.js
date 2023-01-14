const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async(req, res) => {
	const {contacts} = await Contact.find({user_id:req.user.id});
	res.status(200).json(contacts);
});