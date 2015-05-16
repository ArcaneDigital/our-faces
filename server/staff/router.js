'use strict';

var express         = require('express'),
    app             = express();

app.route('/staff')
    .get(function (req, res) {
        res.send({
            staff : [
                {
                    name : 'Chris'
                }
            ]
        })
    });

module.exports = app;
