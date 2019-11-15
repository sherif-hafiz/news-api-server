const express = require('express');
const router = express.Router();

const search = require('../services/search/SearchController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

module.exports = router;
