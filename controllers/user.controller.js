const router = require('express').Router();
const User = require('../models/user.model');

// base endpoint localhost:5000/user

function search(req, res) {
	User.find()
		.then(dbData => {
			res.json(dbData)
		})
		.catch(err => res.status(400).json(err));
}

module.exports.search = search;
