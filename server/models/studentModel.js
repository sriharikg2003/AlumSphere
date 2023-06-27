const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({

    alumniPassword : String,
    alumniEmail : String,

});

const alumniModel = mongoose.model('alumni',alumniSchema);

module.exports = alumniModel;