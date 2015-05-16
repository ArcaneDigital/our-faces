var express     = require('express')
    app         = express(),
    router      = express.Router(),
    body_parser = require('body-parser'),
    config      = require('./config');

app.locals.folder = __dirname;
require('./route-loader').load(app, function(err, route) {
    app.use(config.api.url + config.api.version, route._router);
});

// Encode form data
app.use(
    body_parser.urlencoded({
        extended: false
    })
);

module.exports = app;
