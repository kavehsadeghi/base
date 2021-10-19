const express = require('express');
// let app = express();
module.exports = (app) => {
  app.use(express.json());
};
