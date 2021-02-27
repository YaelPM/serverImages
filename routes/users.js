var express = require('express');
var router = express.Router();
const usersService = require('../controllers/usersService')

router.get('/usernameValidate/:login',usersService.usernameValidate);
router.post('/signup',usersService.signup);
router.post('/login',usersService.login)

module.exports = router;


