const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

async function connectMongoose() {
  await mongoose.connect(
    "mongodb://localhost:27017/studentDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
}

const requestLogger = (req, res, next) => {
  console.log(`METHOD: ${req.method}`);
  console.log(`PATH: ${req.path}`);
  console.log("BODY: ", req.body);
  console.log(`---`);
  next();
}

const StudentSchema = new mongoose.Schema({
  name: String,
  id: String,
}, { collection: 'students' });

const StudentModel = mongoose.model("student", StudentSchema);

connectMongoose()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(requestLogger);

app.get('/', (request, response) => {
  response.send("hi!!!");
});

let students = [];

app.post('/send/', async (req, res, next) => {
  const student = {
    name: req.body.name,
    id: req.body.id
  }
  const studentData = new StudentModel(student);
  await studentData.save();
  res.json(student);
  next();
})

app.get('/students/:id', async (req, res, next) => {
  const student = await StudentModel.findOne({ id: req.params.id })
  if (student) {
    res.json(student);
  } else {
    res.status(404).end();
  }
  next();
})

app.delete('/students/:id', async (req, res, next) => {
  const student = await StudentModel.findOneAndDelete({ id: req.params.id });
  console.log(student);
  if (student) {
    res.status(204).end();
  } else {
    res.status(404).end();
  }
  next();
})

app.patch('/students/:id', async (req, res, next) => {
  const student = await StudentModel.findOneAndUpdate({ id: req.params.id }, { name: req.body.name });
  console.log(student);
  if (student) {
    res.status(200).end();
  } else {
    res.status(404).end();
  }
  next();
})

app.use((req, res) => {
  //middleware for console.logging students after the response (need to call next() in the responses for this to show up)
  console.log(students);
})

const PORT = 5001
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
}); // Then connect to localhost:PORT with your browser