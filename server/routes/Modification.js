var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bounded_Project = mongoose.model("../models/Bounded_Project");
var Volnteer = mongoose.model("../models/Volnteer");
var Donor = mongoose.model("../models/Donor");
var Ongoing_project = mongoose.model("../models/Ongoing_project");
var Sponsor = mongoose.model("../models/Sponsor");


  /* POST Bounded_Project modification. */
  router.post('/Bounded_Project', function(req, res, next) {
  
  Bounded_Project.findOneAndUpdate()(
  {
  	  'keywords': req.body.keywords
  },

  {
      'name': req.body.name,
      'brief_description': req.body.brief_description,
      'full_description': req.body.full_description,
      'address': req.body.address
  })

  /* POST Donor modification. */
  router.post('/Donor', function(req, res, next) {
  Bounded_Project.findOneAndUpdate()(
  {
  	  'name': req.body.name
  },

  {
	  'amount': req.body.amount
  })

  /* POST Ongoing_project modification. */
  router.post('/Ongoing_project', function(req, res, next) {
  Bounded_Project.findOneAndUpdate()(
  {
  	  'name': req.body.name
  },

  {
	  'brief_description': req.body.brief_description,
      'full_description': req.body.full_description,
      'volunteer': req.body.volunteer
  })

  /* POST Ongoing_project modification. */
  router.post('/Sponsor', function(req, res, next) {
  Bounded_Project.findOneAndUpdate()(
  {
  	  'name': req.body.name
  },

  {
	  'brief_description': req.body.brief_description,
      'full_description': req.body.full_description,
      'volunteer': req.body.volunteer
  })

  /* POST Sponsor modification. */
  router.post('/Sponsor', function(req, res, next) {
  Bounded_Project.findOneAndUpdate()(
  {
  	  'name': req.body.name
  },

  {
	    'bounded_projects': req.body.bounded_projects,
	    'ongoing_projects': req.body.ongoing_projects


});

module.exports = router;
