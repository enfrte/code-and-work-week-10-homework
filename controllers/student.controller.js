const router = require('express').Router();
const Student = require('../models/student.model');

// base endpoint localhost:5000/student

function search(req, res) {
	Student.find()
		.then(dbData => res.json(dbData))
		.catch(err => res.status(400).json(err));
}

function addStudent(req, res) {
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
}

function getStudent(req, res) {
	Student.findOne({ id: parseInt(req.params.id) }, (err, student) => {
		if (err) res.end(err.message);
		else res.json(student);
	});
}

function deleteStudent(req, res) {
	Student.findOneAndDelete({ id: parseInt(req.params.id) }, (err, result) => {
		if (err) res.status(404).send(err.message);
		else res.status(204).send(result);
	});
}

async function updateStudent(req, res) {
	// condition, update, callback
	await Student.findOneAndUpdate({ id: parseInt(req.params.id) }, { firstname: req.body.firstname }, (err, result) => {
		if (err) res.status(404).send(err.message);
		else res.status(200).send(result); // will send old object back, unless told not to
	});
}

module.exports.search = search;
module.exports.addStudent = addStudent;
module.exports.getStudent = getStudent;
module.exports.deleteStudent = deleteStudent;
module.exports.updateStudent = updateStudent;
