var express = require('express');
var router = express.Router();
var Volunteer = mongoose.model("volunteer");

/* GET home page. */
router.post('/volunteer', function(req, res, next) {
  Volunteer.insert({
    'name': req.body.name,
    'email': req.body.email,
    'phone': req.body.phone,
    'availability': req.body.availability,
    'verified': req.body.verified
  })
});

module.exports = router;
