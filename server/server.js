#!/bin/env node

var app         = require('./app'),
    config      = require('./config');

app.listen(config.express.port, config.express.ip, function(err) {
    if (err) {
        process.exit(10);
    }

    console.log('App launched @ %s:%s', config.express.ip, config.express.port);
});
