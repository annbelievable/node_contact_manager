const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleWare/validateTokenHandler');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.send('get user');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/current', validateToken, currentUser);

module.exports = router;