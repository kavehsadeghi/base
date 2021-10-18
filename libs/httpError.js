var createError = require('http-errors');
module.exports = app => {
    app.use(function(req, res, next) {
        next(createError(404));
      });
}