let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let EmpreintSchema = require('../models/Empreint');

// CREATE book
router.route('/create-empreint').post((req, res, next) => {
    EmpreintSchema.create(req.body, (error, data) => {
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
    EmpreintSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/edit-empreint/:id').get((req, res) => {
    EmpreintSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-empreint/:id').put((req, res, next) => {
    EmpreintSchema.findByIdAndUpdate(req.params.id, {
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


router.route('/delete-empreint/:id').delete((req, res, next) => {
    EmpreintSchema.findByIdAndRemove(req.params.id, (error, data) => {
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