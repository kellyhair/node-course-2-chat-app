var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
// sample can be found as config.json.rename (rename to config.json w.)
// real ports/settings.
  var envConfig = config[env];

Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});
}
