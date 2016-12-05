// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var ArticleSchema = new Schema({

  // Title of Article
  title: {
    type: String,
    required: true
  },

  // Link to Article
  link: {
    type: String,
    required: true
  },
  
  // Summary of Article
  summary: {
    type: String,
    required: true
  },

  // Create a relation with the Comment model
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]

});

// Create the Article model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;