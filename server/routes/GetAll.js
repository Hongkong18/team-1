var express = require('express');
var router = express.Router();
var Bounded_Project = require("../models/Bounded_Project");
var Volunteer = require("../models/Volunteer");
var Sponsor = require("../models/Sponsor");
var Donor = require("../models/Donor");
var Ongoing_Project = require("../models/Ongoing_Project");


//GetAll 
// Name, id
//Type if === 'U' then Unbounded
//Type if. == 'B' then Bounded

router.post('/Volunteer', function (req, res,next){

    Volunteer.find({}, 'name _id type', function(err, allVolunteer){
        if(err){
          console.log(err);
        } else{
            res.send(allVolunteer);
            //console.log('retrieved list of names', allItems.length, allItems[0]);
        }
    })
});

router.post('/Donor', function (req, res,next){


    Donor.find({}, 'name _id type', function(err, allDonor){
        if(err){
          console.log(err);
        } else{
            res.send(allDonor);
            
        }
    })
});


router.post('/Sponsor', function (req, res,next){


    Sponsor.find({}, 'name _id type', function(err, allSponsor){
        if(err){
          console.log(err);
        } else{
            res.send(allSponsor);
            
        }
    })
});



router.post('/Bounded_Project', function (req, res,next){


    Bounded_Project.find({}, 'name _id type', function(err, allProjects){
        if(err){
          console.log(err);
        } else{
            res.send(allProjects);
            
        }
    })
});

//Get
router.post('/Ongoing_Project', function (req, res,next){


    Ongoing_Project.find({}, 'name _id type', function(err, allProjects){
        if(err){
          console.log(err);
        } else{
            res.send(allProjects);
            
        }
    })
});


//Get all projects form ongoing and bounded
router.post('/Projects', function (req, res, next){

      var bounded_projects = []
      var unbound_projects = []
      for (var proj = 0; proj < req.body.project; proj++) {
        currProj = req.body.project[proj]
        if (currProj.type == 'U') {
          unbound_projects.push({'name':currProj.name '_id':currProj.id, 'type': 'Ongoing_Project' })
        }
        else if(currProj.type == 'B') {
          bounded_projects.push({'name':currProj.name '_id':currProj.id, 'type': 'Bounded_Project' })
        }
      }

      let bound_pro = toObject(bounded_projects);
      let unbound_pro = toObject(unbound_projects);

      let projects = Object.assign(bound_pro, unbound_pro);

      //bounded_projects = [{name, id, type}
  
      projects.find({}, 'name _id type', function(err, allProjects){
        
      res.send(allProjects);

      })
});

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
  return rv;
}


module.exports = router;
