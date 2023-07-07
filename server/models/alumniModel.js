const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({

  email: String,
  password: String,
  name: String,
  branch: String,
  age: String,
  role: String,
  yearOfJoin: String,
  yearOfGrad: String,
  course: String,
  department: String,
  linkedIn: String,
  facebook: String,
  twitter: String,
  instagram: String,
  currentLocation: String,
  homeTown: String,
  companyUniversity: String,
  profession: String,
  skills: String,
  aboutMe: String,
  contact: String

});

const alumniModel = mongoose.model('alumni', alumniSchema);

module.exports = alumniModel;