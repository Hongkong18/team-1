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
            res.sender(allDonor);
            
        }
    })
});


router.post('/Sponsor', function (req, res,next){


    Sponsor.find({}, 'name _id type', function(err, allSponsor){
        if(err){
          console.log(err);
        } else{
            res.sender(allSponsor);
            
        }
    })
});



router.post('/Bounded_Project', function (req, res,next){


    Bounded_Project.find({}, 'name _id type', function(err, allProjects){
        if(err){
          console.log(err);
        } else{
            res.sender(allProjects);
            
        }
    })
});

//Get
router.post('/Ongoing_Project', function (req, res,next){


    Ongoing_Project.find({}, 'name _id type', function(err, allProjects){
        if(err){
          console.log(err);
        } else{
            res.sender(allProjects);
            
        }
    })
});


// var bounded_projects = []
//     var unbound_projects = []
//     for (var proj = 0; proj < req.body.project; proj++) {
//       currProj = req.body.project[proj]
//       if (currProj.type == 'U') {
//         unbound_projects.push({'project':currProj.id, 'amount': currProj.amount})
//       } else if(currProj.type == 'B') {
//         bounded_projects.push({'project':currProj.id, 'amount': currProj.amount})
//       }
//     }



//GetAll 
// Name, id
//Type if === 'U' then Unbounded
//Type if. == 'B' then Bounded


module.exports = router;
