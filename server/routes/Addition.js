var express = require('express');
var router = express.Router();
var Bounded_Project = require("../models/Bounded_Project");
var Volunteer = require("../models/Volunteer");
var Sponsor = require("../models/Sponsor");
var Donor = require("../models/Donor");
var Ongoing_Project = require("../models/Ongoing_Project");
var Staff = require("../models/Staff");

router.post('/bounded_project', function(req, res, next) {
  try{
    Bounded_Project.create({
      'name': req.body.name,
      'brief_description': req.body.brief_description,
      'full_description': req.body.full_description,
      'address': req.body.address,
      'date': req.body.date,
      'volunteers': req.body.volunteers,
      'staff': req.body.staff,
      'keywords': req.body.keywords
    })
  } catch(e) {
    console.log(e);
  }
});

router.post('/volunteer', function(req, res, next) {
  try{
    Volunteer.create({
      'name': req.body.name,
      'email': req.body.email,
      'phone': req.body.phone,
      'availability': req.body.availability,
      'skillsets': req.body.skillsets
    })
  } catch(e) {
    console.log(e);
  }
});

router.post('/staff', function(req, res, next) {
  try{
    Staff.create({
      'name': req.body.name,
      'email': req.body.email,
      'phone': req.body.phone
    })
  } catch(e) {
    console.log(e);
  }
});

router.post('/donor', function(req, res, next) {
  try{
    Donor.create({
      'name': req.body.name,
      'amount': req.body.amount,
      'email': req.body.email,
      'phone': req.body.phone
    })
  } catch(e) {
    console.log(e);
  }
});

router.post('/ongoing_project', function(req, res, next) {
  try{
    Ongoing_Project.create({
      'name': req.body.name,
      'brief_description': req.body.brief_description,
      'full_description': req.body.full_description,
      'volunteers': req.body.volunteers,
      'keywords': req.body.keywords
    })
  } catch(e) {
    console.log(e);
  }
});

router.post('/sponsor', function(req, res, next) {
  var bounded_projects = []
  var unbound_projects = []
  for (var proj = 0; proj < req.body.project; proj++) {
    currProj = req.body.project[proj]
    if (currProj.type == 'U') {
      unbound_projects.push({'project':currProj.id, 'amount': currProj.amount})
    } else if(currProj.type == 'B') {
      bounded_projects.push({'project':currProj.id, 'amount': currProj.amount})
    }
  }
  try{
    Sponsor.create({
      'name': req.body.name,
      'amount': req.body.amount,
      'bounded_projects': bounded_projects,
      'ongoing_projects': unbound_projects
    })
  } catch(e) {
    console.log(e);
  }
});

module.exports = router;
