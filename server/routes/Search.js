const express = require('express');
const router = express.Router();
const Bounded_Project = require("../models/Bounded_Project");
const Volunteer = require("../models/Volunteer");
const Sponsor = require("../models/Sponsor");
const Donor = require("../models/Donor");
const Ongoing_Project = require("../models/Ongoing_Project");
const Staff = require("../models/Staff");
router.post('/events', async function(req, res, next) {
    let keyword_list = req.body.keyword_list;
    console.log(keyword_list);
    try{
        console.log('enter');
        // const all_val = await Bounded_Project.find({});
        const bounded_result = await Bounded_Project.find({
            keywords: keyword_list
        });
        const unbounded_result = await Ongoing_Project.find({
            keywords: keyword_list
        });
        console.log(all_val);
        console.log(bounded_result);
        console.log(unbounded_result);
        res.send(unbounded_result);
    } catch(e) {
        console.log(e);
        return;
    }
});

router.post('/search_skills_vol', async function(req, res, next) {
  try{
    // Volunteer.create({
    //   'name': req.body.name,
    //   'email': req.body.email,
    //   'phone': req.body.phone,
    //   'availability': req.body.availability,
    //   'skillsets': req.body.skillsets
    // })
    const skillset = req.body.skillset;
    console.log('enter volunteer');
    const volunteers = await Volunteer.find({
      skillset: skillset
    });
    res.send(volunteers);
  } catch(e) {
    console.log(e);
  }
});

router.post('/search_available_vol', async function(req, res, next) {
  console.log('enter route');
    Volunteer.create({
      'name': "hi",
      'email': "hi",
      'phone': 123123,
      'availability': {
        'to': new Date("2015-03-25"),
        'from': new Date("2015-03-29")
      },
      'skillsets': req.body.skillsets
    })
  try {
    const to_date = new Date(req.body.to_date);
    const from_date = new Date(req.body.from_date);
    const volunteers = await Volunteer.find({
      availability: {$elemMatch: {to: {"$lte": to_date}, from: {"$gte": from_date}}}
    });
    console.log(volunteers);
    res.send(volunteers);
  } catch (e) {
    console.log(e);
  }
 });

module.exports = router;
