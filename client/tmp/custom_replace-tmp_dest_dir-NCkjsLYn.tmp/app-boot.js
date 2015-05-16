/* jshint ignore:start */

define('our-faces/config/environment', ['ember'], function(Ember) {
  var prefix = 'our-faces';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("our-faces/tests/test-helper");
} else {
  require("our-faces/app")["default"].create({"name":"our-faces","version":"0.0.0.ef743628"});
}

/* jshint ignore:end */
