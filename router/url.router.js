const express = require('express');
const router = express.Router();
// const { handleGenrateSortUrl } = require('../controller/url.controller');
const urlController = require('../controller/url.controller')
const passport = require('passport');

router.post('/',
// passport.checkAuthentication,
urlController.handleGenrateSortUrl)


module.exports = router;