'use strict';

var express         = require('express'),
    app             = express(),
    router          = express.Router();

router.route('/get')
    .get(function (req, res) {
        res.send({
            staff : [
                {
                    name : 'Chris'
                }
            ]
        })
    });

app.use('/staff', router);

module.exports = app;
