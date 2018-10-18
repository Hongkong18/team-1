var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Bounded_Project = require("../models/Bounded_Project");
/* GET home page. */
router.post('/bounded_project', function(req, res, next) {
  console.log(Bounded_Project);
  try {
    Bounded_Project.create({
      'name': req.body.name
      // 'email': req.body.email,
      // 'phone': req.body.phone,
      // 'availability': req.body.availability,
      // 'verified': req.body.verified
    })
  } catch(e) {
    console.log(typeof(Bounded_Project))
    console.log(e);
  }
});

module.exports = router;
