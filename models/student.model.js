const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  id: Number,
  firstname: String,
  surname: String,
  dob: Date,
  email: String
}, { collection: 'students' });

// The string in 'quotes' will be the name of the db collection. 
// A collection will be converted to lower case and pluralised. 'Test' -> 'tests'
const Student = mongoose.model('students', studentSchema);
module.exports = Student;
