var Author = require('../models/author');
var async = require('async');
var Book = require('../models/book');

// Display list of all Authors.
exports.author_list = function(req, res, next) {
    Author.find()
      .sort([['family_name', 'ascending']])
      .exec(function (err, list_authors) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('author_list', { title: 'Author List', author_list: list_authors });
      });
  };

// Display detail page for a specific Author.
exports.author_detail = function(req, res, next) {
    async.parallel({
        author: function(callback) {
            Author.findById(req.params.id)
              .exec(callback)
        },
        authors_books: function(callback) {
          Book.find({ 'author': req.params.id },'title summary')
          .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.author==null) { // No results.
            var err = new Error('Author not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.authors_books } );
    });
};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};
// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};
// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};
// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};
// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};
// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
