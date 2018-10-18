var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Bounded_Project = require("../models/Bounded_Project");
/* GET home page. */
router.post('/bounded_project', function(req, res, next) {
  console.log(Bounded_Project);
  try{
    Bounded_Project.create({
      'name': req.body.name,
      'brief_description': req.body.brief_description,
      'full_description': req.body.full_description,
      'address': req.body.address
    })
  } catch(e) {
    console.log(e);
  }
});

module.exports = router;
