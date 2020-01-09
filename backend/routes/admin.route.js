let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let AdminSchema = require('../models/Administrateur');


router.route('/create-admin').post((req, res, next) => {
    AdminSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.post('/login',(req, res) =>
{
    AdminSchema.findOne({email: req.body.email}).then(user=>{
      if (user) {
        if ((req.body.password==user.password)) {
          // Passwords match
          res.json({ error:false })
  
        } else {
          // Passwords don't match
          res.json({ msg: 'Password is incorrect !',error:true })
          console.log("invalid password");

        }
      } else {
        res.json({ error: 'Email does not exist' })
       console.log("invalid email");
      }
    })
    .catch(err => {
     res.send('error: ' + err)
    })

});


module.exports = router;