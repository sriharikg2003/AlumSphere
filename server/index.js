const express = require('express')
const app = express()
const cors = require('cors')


const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken');

const path = require("path");


// models
const mongoose = require('mongoose')
const alumniModel = require("./models/alumniModel")
const adminModel = require("./models/adminModel")
const otpModel = require("./models/otpModel");



const PORT = 3001
const CPORT = 3002
mongoose.connect('mongodb://127.0.0.1:27017/alumniDB');

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:" + CPORT],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + CPORT);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE', 'PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);


// ****************************************************************
// Mailer

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sriharikg2003@gmail.com',
    pass: ''
  }
});

// OTP Generator

function generateRandomNumber() {
  const min = 100000; // Minimum value (inclusive)
  const max = 999999; // Maximum value (inclusive)
  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

// ****************************************************************



function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(200).json({ error: "Unauthorized: Token not provided" });
    }

    jwt.verify(token.split(' ')[1], '123fsfdsf2132132sdf', (err, decoded) => {
      if (err) {
        return res.status(200).json({ error: "Unauthorized: Invalid token" });
      }

      // Store the decoded user information in the request object
      req.user = decoded;
      next();
    });
  }

  catch (err) {
    console.log(err);
    res.json({ verified: false });
  }
}


app.get('/auth', (req, res) => {
  try {
    // Verify the token and get the user email from req.user.email
    verifyToken(req, res, () => {
      const userEmail = req.user.email;
      res.json({ email: userEmail, verified: true });
    });
  } catch (err) {
    // Handle the error thrown by verifyToken middleware
    res.json({ verified: false });
  }
});

// Alumni 

app.post('/signup', (req, res) => {
  const user = req.body;
  const Alumni = new alumniModel({
    email: user.email, password: user.password
  })


  alumniModel.findOne({ email: user.email }).then((result) => {
    if (result) {
      console.log("ALREADY EXIST")
      res.send("ALREADY EXIST")
    }

    else {
      Alumni.save().then(() => { console.log("ALumni signed in") });
      res.send("Succesfully Signed In")
    }

  })


})


app.get("/getSessionId", (req, res) => {

  if (req.session.user) {
    res.send({ sessionId: req.session.user })
  }
  else {
    res.send({ sessionId: null })
  }
})


app.post('/signin', (req, res) => {
  const user = req.body;

  alumniModel.findOne({ email: user.email }).then((result) => {
    if (result) {
      if (result.password === user.password) {
        // Generate a JWT token
        const token = jwt.sign({ email: user.email }, '123fsfdsf2132132sdf', {
          expiresIn: '1h', // Token expiration time
        });

        console.log(token);
        // Send the token as a response
        res.status(200).json({
          alert: "Signed in Successfully",
          verified: true,
          token: token,
          user: user.email,
        });
      } else {
        res.status(200).json({
          alert: "Incorrect Password",
          verified: false
        });
      }
    } else {
      res.status(200).json({
        alert: "User not registered",
        verified: false
      });
    }
  });
});




app.post("/AskOtp", (req, res) => {
  const randomNumber = generateRandomNumber();
  const user = req.body;

  otpModel.findOneAndDelete({ email: user.email }).then(() => {
    console.log("OLD OTP DELETED")
  })


  const OTP = new otpModel({
    email: user.email,
    otp: randomNumber
  })




  alumniModel.findOne({ email: user.email }).then((result) => {
    if (result) {
      console.log("ALREADY EXIST")
      res.status(200).send({ alert: "ALREADY EXIST USER", allow: false })
    }

    else {

      OTP.save().then(() => { console.log("Will send otp now to ", user.email) });
      console.log("OTP : ", randomNumber)

      var mailOptions = {
        from: 'IIT DHARWAD ALUMNI',
        to: user.email,
        subject: 'VERIFY OTP - IIT ALUMNI',
        html: '<h1>This IS ONE TIME PASSWORD  <br>' + randomNumber + '<br></h1>  '
      };


      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);

        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send({ alert: "Sent OTP", allow: true })
        }
      });

    }

  })

})



app.post("/VerifyOtp", (req, res) => {
  const user = req.body;

  console.log("At verfiying")

  otpModel.findOne({ email: user.email }).then(result => {


    if (result.otp == user.otp) {
      console.log("VERFIED USER");
      otpModel.findOneAndDelete({ email: user.email }).then(() => {
        console.log(" OTP is NULL and VOID now")
      })
      res.status(200).send({ alert: "Verfied OTP", code: true });

    }

    else {
      console.log("Incorrect OTP");
      res.status(200).send({ alert: "Enter Correct OTP", code: false });
    }
  })


})


app.patch("/updateBio", (req, res) => {
  alumniModel.findOneAndUpdate(
    { email: req.body.email },
    {
      name: req.body.name,
      branch: req.body.branch,
      age: req.body.age,
      role: req.body.role,
      yearOfJoin: req.body.yearOfJoin,
      yearOfGrad: req.body.yearOfGrad,
      course: req.body.course,
      department: req.body.department,
      linkedIn: req.body.linkedIn,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      currentLocation: req.body.currentLocation,
      homeTown: req.body.homeTown,
      companyUniversity: req.body.companyUniversity,
      profession: req.body.profession,
      skills: req.body.skills,
      aboutMe: req.body.aboutMe,
      contact: req.body.contact
    }
  )
    .then(() => {
      res.status(200).send({ alert: "Updated Successfully", code: true });
    })
    .catch(error => {
      console.error("Error:", error);
      res.status(200).send({ alert: "Error occurred", code: false });
    });
});

app.get("/biodata", (req, res) => {
  console.log(req.query);
  alumniModel.findOne({ email: req.query.email }).then(result => {
    if (result) {
      console.log(result);
      res.status(200).send(result);
    } else {
      res.status(200).send({ alert: "Error occurred in fetching", code: false });
    }
  }).catch(error => {
    console.error("Error:", error);
    res.status(500).send({ alert: "Error occurred", code: false });
  });
});



app.get("/getProfiles" , (req, res) => {
  alumniModel.find().then ( (response) => {
    
    console.log(response);
    res.status(200).send({ profiles: response,alert: "Sent profiles", code: true });

  })
  .catch(err => {    res.status(200).send({ alert: "Error occurred", code: false });
})
})

app.listen(PORT, () => {
  console.log('listening on ', PORT);
})