// const router = require('express').Router();
// const api = require('./api');

// router.use('/api', api);

// module.exports = router;


var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('index');
});

module.exports = router;
