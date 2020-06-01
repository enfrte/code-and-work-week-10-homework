const router = require('express').Router();
const search = require("../controllers/user.controller").search;
//const mongoose = require('mongoose');

router.get('/search', search); // directs the url path to the routes file

module.exports.router = router;