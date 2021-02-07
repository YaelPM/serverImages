var express = require('express');
var router = express.Router();
const usersService = require('../controllers/usersService')

router.get('/usernameValidate/:login',usersService.usernameValidate);
router.get('/passwordValidate/:password',usersService.passwordValidate);
router.post('/signup',usersService.signup)

module.exports = router;


