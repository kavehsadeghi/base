const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
require('events').EventEmitter.defaultMaxListeners = 0;
const testController = require('../controllers/testController');
router.get('/test', testController.index);
module.exports = router;
