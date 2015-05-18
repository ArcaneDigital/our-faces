'use strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema;

var StaffSchema = mongoose.model('Staff', Schema({
    id: {
        type: String
    },
    name: {
        type: String
    }
}));

module.exports = StaffSchema;
