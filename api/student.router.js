const router = require('express').Router();
const controller = require("../controllers/student.controller");
const search = controller.search;
const addStudent = controller.addStudent;
const getStudent = controller.getStudent;
const deleteStudent = controller.deleteStudent;
const updateStudent = controller.updateStudent;

// routes
router.get('/student', search); // all students
router.post('/student', addStudent);
router.get('/student/:id', getStudent);
router.delete('/student/:id', deleteStudent);
router.patch('/student/:id', updateStudent);

module.exports.router = router;
