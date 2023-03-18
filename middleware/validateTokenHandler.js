const validateTokenHandler = (err,req, rex, next) => {
	if(authHeader && authHeader.startsWith('Bearer')){
		token = authHeader.split("")[1];
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if(err){
				res.status(401);
				throw new Error("User is not authorized");
			}
			req.user = decoded.user;
			next();
		});
	}
}

module.exports = validateTokenHandler;