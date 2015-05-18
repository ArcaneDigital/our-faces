'use strict';

var express         = require('express'),
    app             = express(),
    router          = express.Router(),
    StaffModel      = require('./model');

router.route('/:id(\\d+)/')
    .get(function(req, res) {
        StaffModel.find({ id: req.params.id }).exec(function(err, result) {
            res.send(result);
        });
    })
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
