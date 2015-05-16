var express         = require('express'),
    app             = express(),
    router          = express.Router(),
    body_parser     = require('body-parser'),
    config          = require('./config'),
    route_loader    = require('./route-loader');

app.locals.folder = __dirname;

// Dynamically load routes from component folders
route_loader.load(app, function(err, route) {
    app.use(config.api.url + config.api.version, route._router);
});

// Encode form data
app.use(
    body_parser.urlencoded({
        extended: false
    })
);

module.exports = app;
