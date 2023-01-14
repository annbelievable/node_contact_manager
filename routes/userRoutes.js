var express = require('express');
var { registerUser, loginUser, currentUser } = require('../controllers/userController');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('get user');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/current', currentUser);

module.exports = router;