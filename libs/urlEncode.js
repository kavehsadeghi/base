const express = require('express');
// const app = express();
module.exports = (app) => {
  app.use(express.urlencoded({extended: false}));
};
