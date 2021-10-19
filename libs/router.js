const routes = require('../routes/routes');
// const express = require('express');
// const app = express();
module.exports = (app) => {
  app.use('/api/v1.0', routes);
};
