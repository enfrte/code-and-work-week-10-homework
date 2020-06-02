const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require("./api/user.router").router;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // process.env.PORT is handy for hosting like heroku 

app.use(cors());
app.use(express.json());

async function connectMongoose() {
	await mongoose.connect(
		"mongodb://localhost:27017/studentDB",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);

	app.use('/api/user/', userRouter);

	//await remove(TestModel, {name: "Rene 3"});
	//await createNew(TestModel, {name: "Rene 3", surname: "slightly 3"});
	//await createNew(TestModel, {name: "Rene 4", surname: "slightly 4"});
	//await createNew(TestModel, {name: "Rene 5", surname: "slightly 5"});
	//await createNew(TestModel, {name: "Rene 6", surname: "slightly 6"});
	//await TestModel.findOneAndUpdate({name: "Rene"}, {fullname: "Rene Orosz"});

	mongoose.connection.close();
}

connectMongoose();

app.get('/', (req, res) => {
	res.send("Express is working");
});

app.listen(port, () => console.log(`Server is running on ${port}`));