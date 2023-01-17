const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) => {
	const {username, email, password} = req.body;
	if(!username||!email||!password){
		res.status(400);
		throw new Error("All fields are mandatory!");
	}
	const userAvailable = await User.findOne({email});
	if(userAvailable){
		res.Status(400);
		throw new Error("User already registered");
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({
		username, email, password:hashedPassword
	})

	return res.json({user:user});
});

//@desc Register a user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async(req, res) => {
	const {username, email, password} = req.body;
	if(!username||!email||!password){
		res.status(400);
		throw new Error("All fields are mandatory!");
	}
	const userAvailable = await User.findOne({email});
	if(userAvailable){
		res.Status(400);
		throw new Error("User already registered");
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({
		username, email, password:hashedPassword
	})
	return res.json({user:user});
});

//@desc Register a user
//@route POST /api/users/register
//@access public
const currentUser = asyncHandler(async(req, res) => {
	const {username, email, password} = req.body;
	if(!username||!email||!password){
		res.status(400);
		throw new Error("All fields are mandatory!");
	}
	const userAvailable = await User.findOne({email});
	if(userAvailable){
		res.Status(400);
		throw new Error("User already registered");
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({
		username, email, password:hashedPassword
	})

	return res.json({user:user});
});

module.exports = {registerUser, loginUser, currentUser};