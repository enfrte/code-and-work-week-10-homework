const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require("./api/user.router").router;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // process.env.PORT is handy for hosting like heroku 
const requestLogger = (req, res, next) => {
	console.log(`-----------------\nMETHOD: ${req.method}`);
	console.log(`PATH: ${req.path}`);
	console.log("BODY: ", req.body);
	console.log(`-----------------`);
	next();
}

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/api/user/', userRouter);
app.get('/', (req, res) => {
	res.send("Express is working");
});
/*
// Connects to the mongo each time 
async function connectMongoose() {
	await mongoose.connect(
		"mongodb://localhost:27017/studentDB",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);

	app.use('/api/user/', userRouter);
}
connectMongoose();
*/

// Modified example of mongo keep alive connection https://github.com/madhums/node-express-mongoose-demo/blob/master/server.js
function connect() {
	mongoose.connection
		.on('error', console.log)
		.on('disconnected', connect);
	return mongoose.connect("mongodb://localhost:27017/studentDB", {
		keepAlive: 1,
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
}
connect();

app.listen(port, () => console.log(`Server is running on ${port}`));
