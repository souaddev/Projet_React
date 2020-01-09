let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let BookSchema = require('../models/Book');

// CREATE book
router.route('/create-book').post((req, res, next) => {
    BookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


// READ BOOK
router.route('/').get((req, res) => {
  BookSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single book
router.route('/edit-book/:id').get((req, res) => {
  BookSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update book
router.route('/update-book/:id').put((req, res, next) => {
    BookSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Book updated successfully !')
    }
  })
})

// Delete book
router.route('/delete-book/:id').delete((req, res, next) => {
    BookSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;