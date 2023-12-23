const express = require('express');
const passport = require('../config/localStatagey')

const router = express.Router();

const userController = require('../controller/user.controller')

router.post('/singin', passport.authenticate(
    'local',
    // { failureRedirect: '/user/singin' }
    { failureMessage: 'user not found   ' }
), userController.createSession);

router.post('/singup', userController.create);


module.exports = router;