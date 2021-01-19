// let express = require('express');
// let router = express.Router();
// let sequelize = require('../db');
// let User = sequelize.import('..models/user');/
// OR

const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// ********** USER SIGNUP **********
// Updated code via screen shots (10.4) add token to CreateSuccess code
router.post('/create', function (req, res) {
  User.create({
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13),
  })
    .then(function createSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      res.json({
        user: user,
        message: 'User successfully created!',
        sessionToken: token,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//Final Login Function
router.post('/login', function (req, res) {
  User.findOne({
    where: {
      email: req.body.user.email,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(req.body.user.password, user.password, function (
          err,
          matches
        ) {
          if (matches) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
              expiresIn: 60 * 60 * 24,
            });
            res.status(200).json({
              user: user,
              message: 'User successfully logged in!',
              sessionToken: token,
            });
          } else {
            res.status(502).json({ error: 'Login Failed' });
          }
        });
      } else {
        res.status(500).json({ error: 'User does not exist.' });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});
// We export the module for usage outside of the file.
module.exports = router;

// DEBUG TIP
// When we use require( ' dependency ' ) such as on line 13, we are
// importing and accessing dependencies we installed in our project. Our
// project's dependencies are housed in the package.json. This is a great
// place to check for spelling errors.
// When we use require( ' . /foldername/filename ' ) such as on line 20 to
// access information, we are following our file structure to walk through
// our various folders and access the correct file or function. This is
// another place to check for spelling errors.
