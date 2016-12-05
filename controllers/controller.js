// Node Dependencies
var express = require('express');
var router = express.Router();
var path = require('path');


// Import the Comment and Article models
var Comment = require('../models/Comment.js');
var Article = require('../models/Article.js');






// Index Home Page Render
router.get('/', function (req, res){
  res.render('index');
});





// Export Router to Server.js
module.exports = router;