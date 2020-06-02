const router = require('express').Router();
const Student = require('../models/student.model');

// base endpoint localhost:5000/student

function search(req, res) {
	Student.find()
		.then(dbData => {
			res.json(dbData)
		})
		.catch(err => res.status(400).json(err));
}

function addStudent(req, res, next) {
	const student = {
		id: Date.now(),
		firstname: req.body.firstname,
		surname: req.body.lastname,
		dob: req.body.dob,
		email: req.body.email
	}
	const studentData = new Student(student);
	studentData.save();
	res.json(student);
	next();
}

function getStudent(req, res, next) {
	Student.findOne({ id: parseInt(req.params.id) }, (err, student) => {
		if (err) res.end(err.message);
		else res.json(student);
		next();
	});
}

module.exports.search = search;
module.exports.addStudent = addStudent;
module.exports.getStudent = getStudent;