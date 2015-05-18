'use strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema;

var StaffSchema = mongoose.model('Staff', Schema({
    id: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    position: {
        type: String
    },
    location: {
        type: String
    },
    photo: {
        type: String
    },
    extension: {
        type: String
    }
}));

module.exports = StaffSchema;
