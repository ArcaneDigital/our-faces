var express         = require('express'),
    app             = express(),
    router          = express.Router(),
    mongoose        = require('mongoose'),
    body_parser     = require('body-parser'),
    config          = require('./config'),
    route_loader    = require('./route-loader');

app.locals.folder = __dirname;

mongoose.connect(config.mongo.host, function(err, res) {
    if (err) {
        return console.log('MONGO ERROR:', err);
    }
});

// Dynamically load routes from component folders
route_loader.load(app, function(err, route) {
    app.use(config.api.url, route._router);
});

// Encode form data
app.use(
    body_parser.urlencoded({
        extended: true
    })
);

module.exports = app;
