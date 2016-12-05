// Node Dependencies
var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request'); // for web-scraping
var cheerio = require('cheerio'); // for web-scraping

// Import the Comment and Article models
var Comment = require('../models/Comment.js');
var Article = require('../models/Article.js');


// Index Home Page Render
router.get('/', function (req, res){

  // Query MongoDB for all article entries
  Article.find({})

    // But also populate all of the comments associated with the articles.
    .populate('note')

    // Then, send them to the handlebars template to be rendered
    .exec(function(err, doc){
      // log any errors
      if (err){
        console.log(err);
      } 
      // or send the doc to the browser as a json object
      else {
        var hbsObject = {articles: doc}
        res.render('index', hbsObject);
      }
    });

});


// Web Scrape route
router.get('/scrape', function(req, res) {

  // First, grab the body of the html with request
  request('http://www.theonion.com/', function(error, response, html) {

    // Then, load html into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);

    // Now, grab every everything with a class of "inner" with each "article" tag
    $('article .inner').each(function(i, element) {

        // Create an empty result object
        var result = {};

        // Collect the Article Title (contained in the "h2" of the "header" of "this")
        result.title = $(this).children('header').children('h2').text().trim() + ""; //convert to string for error handling later

        // Collect the Article Link (contained within the "a" tag of the "h2" in the "header" of "this")
        result.link = 'http://www.theonion.com' + $(this).children('header').children('h2').children('a').attr('href').trim();

        // Collect the Article Summary (contained in the next "div" inside of "this")
        result.summary = $(this).children('div').text().trim() + ""; //convert to string for error handling later


        // Error handling to ensure there are no empty scrapes
        if(result.title !== "" && result.summary !== ""){

          // Using the Article model, create a new entry (note that the "result" object has the exact same key-value pairs of the model)
          var entry = new Article (result);

          // Save the entry to MongoDB
          entry.save(function(err, doc) {
            // log any errors
            if (err) {
              console.log(err);
            } 
            // or log the doc
            else {
              console.log(doc);
            }
          });

        }

    });
  });
  // Tell the browser scraping completed.
  res.send("Scrape Complete");
});




// Export Router to Server.js
module.exports = router;