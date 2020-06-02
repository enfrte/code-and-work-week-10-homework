const router = require('express').Router();
const search = require("../controllers/student.controller").search;
const addStudent = require("../controllers/student.controller").addStudent;
const getStudent = require("../controllers/student.controller").getStudent;

// routes
router.get('/student', search); // all students
router.post('/student', addStudent);
router.get('/student/:id', getStudent);


module.exports.router = router;
