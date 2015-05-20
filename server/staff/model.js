'use strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema;

var StaffCounter = mongoose.model('StaffCounter', Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        default: 0
    }
}));

var StaffSchema = Schema({
    id:{
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
});

StaffSchema.pre('save', function(next) {
    var member = this;

    StaffCounter.findByIdAndUpdate(
        'staffID',
        { $inc: { seq: 1 } },
        { upsert: true },
        function(err, counter) {
            if (err) {
                return next(err);
            }

            member.id = counter.seq;
            next();
        });
});

module.exports = mongoose.model('Staff', StaffSchema);
