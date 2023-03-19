const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
		res.status(400);
		throw new Error("User already registered");
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({
		username, email, password:hashedPassword
	})

	return res.json({user:user});
});

//@desc Register a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
	const {email, password} = req.body;
	if(!email||!password){
		res.status(400);
		throw new Error("All fields are mandatory!");
	}
	const user = await User.findOne({email});
	if(user&&(await bcrypt.compare(password,user.password))){
		const accessToken = jwt.sign(
			{
				user:{
					id:user.id,
					username:user.username,
					email:user.email
				}
			},
			process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"1h"}
		);
		res.status(200).json({accessToken});
	}else{
		res.status(401);
        throw new Error("Invalid Credentials");
	}
});

//@desc Register a user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req, res) => {
	console.log("request");
	//console.log(req);
	return res.json({user:req.user});
});

module.exports = {registerUser, loginUser, currentUser};