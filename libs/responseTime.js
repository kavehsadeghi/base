var responseTime = require('response-time');
module.exports = app => {
    app.use(responseTime());
}