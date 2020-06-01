const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname: String, 
  surname: String,
  dob: Date,
  email: String
}, { collection: 'students' });

// The string in 'quotes' will be the name of the db collection. 
// A collection will be converted to lower case and pluralised. 'Test' -> 'tests'
const User = mongoose.model('students', userSchema); 
module.exports = User;
