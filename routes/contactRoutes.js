var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('get contact');
});

module.exports = router;
