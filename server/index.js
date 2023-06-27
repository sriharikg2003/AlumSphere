const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const studentModel = require("./models/studentModel")
const adminModel = require("./models/adminModel")
const PORT = 3001
mongoose.connect('mongodb://127.0.0.1:27017/alumniDB');


app.use(express.json())
app.use(cors())  //Connct Reaact with backend

app.post("/signin", (req, res) => {
  const user = req.body;
  const Alumni = new studentModel({
    alumniPassword: user.alumniPassword, alumniEmail: user.alumniEmail
  })

  Alumni.save().then( ()=> {console.log("Success")});
  res.sendStatus(200);
})




app.listen(PORT, () => {
  console.log('listening on ', PORT);
})