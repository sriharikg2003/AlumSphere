const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    adminName : String,
    adminEmail : String,

});

const adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel;