const mongoose = require("mongoose");

async function connectMongoose() { 
	await mongoose.connect(
		"mongodb://localhost/test",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);
}

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	fullname: String
});

const User = mongoose.model("Users", UserSchema);

const user = new User({
	username: "Rene",
	password: "slightly",
	fullname: "Rene Orosz"
});

// Now we can save it to the database with its .save() method.
user.save().then(result => {
	console.log('note saved!');
	mongoose.connection.close();
});
