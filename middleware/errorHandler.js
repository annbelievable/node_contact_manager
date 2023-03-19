const {constants} = require("../constants");

const errorHandler = (req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500;
	switch (statusCode) {
		case constants.VALIDATION_ERROR:
			res.json({
				title:"Validation error",
				message:err.message,
				stackTrace:err.stack,
			});
			break;
	}
}

module.exports = errorHandler;