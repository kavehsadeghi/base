var express = require('express');
// const app = express();
var router = express.Router();
require('events').EventEmitter.defaultMaxListeners = 0
var test_controller = require('../controllers/testController');
router.get('/test', test_controller.index);
module.exports = router;
