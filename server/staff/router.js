'use strict';

var express         = require('express'),
    app             = express(),
    router          = express.Router(),
    StaffCtrl       = require('./controller');

router.route('/')

    // Get list of staff members
    .get(StaffCtrl.getMany)
    .post(StaffCtrl.create);

router.route('/:id(\\d+)/')

    // Get staff member by ID
    .get(StaffCtrl.getOne)

    // Update staff member by ID
    .post(StaffCtrl.update)

    // Remove staff member by ID
    .delete(StaffCtrl.delete);

app.use('/staff', router);

module.exports = app;
