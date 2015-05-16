'use strict';

var execFile = require('child_process').execFile;

function RouteLoader() {

    this.load = function(app, callback) {
        execFile('find', [ app.locals.folder ], function(err, stdout, stderr) {
            var file_list = stdout.split('\n'),
                fragments,
                file_name;

            file_list.map(function(file) {
                if (file.indexOf('node_modules') > -1) {
                    return;
                }

                fragments = file.split('/');
                fragments.shift();

                file_name = fragments.slice(-1).pop();
                fragments.splice(-1, 1);

                if(file_name !== 'router.js') {
                    return;
                }

                var route = require('/' + fragments.join('/') + '/router');

                if (callback) {
                    return callback(null, route);
                }

                app.use(route);
            });
        });
    }

}

module.exports = new RouteLoader;
