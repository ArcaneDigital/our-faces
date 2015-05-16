var express     = require('express')
    app         = express(),
    router      = express.Router(),
    body_parser = require('body-parser'),
    config      = require('./config');

// Encode form data
app.use(
    body_parser.urlencoded({
        extended: false
    })
);

router.get('/test', function(req, res) {
    res.send('Testing the API router');
});

app.use('/api/v' + config.api.version, router);

module.exports = app;
