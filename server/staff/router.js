'use strict';

var express         = require('express'),
    app             = express(),
    router          = express.Router(),
    StaffModel      = require('./model');

router.route('/')

    // Get list of staff members
    .get(function(req, res) {
        StaffModel.find( {} ).exec(function(err, result) {
            if (err) {
                return res.send({
                    err: {
                        message: 'Could not retrieve staff list.'
                    }
                });
            }

            // Create a new collection and cast each value to an object so we
            // can manipulate it if the need arises
            var staffMembers = result.map(function(member) {
                var member = member.toObject();

                return member;
            });

            res.send({
                result: {
                    total: staffMembers.length,
                    staff: staffMembers
                }
            });
        });
    });

router.route('/:id(\\d+)/')

    // Get staff member by ID
    .get(function(req, res) {
        StaffModel.find({ id: req.params.id }).exec(function(err, result) {
            res.send(result);
        });
    })

    // Update staff member by ID
    .post(function(req, res) {
        var staffID = req.params.id,
            staffData = req.body;

        StaffModel.findOneAndUpdate({ id: staffID },
            staffData,
            { upsert: true },
            function(err, result) {
                if (err) {
                    res.send({
                        err: {
                            message: err
                        }
                    });
                }

                res.send({
                    result: {
                        message: 'Successfully updated staff member.'
                    }
                });
            }
        );
    });

app.use('/staff', router);

module.exports = app;
