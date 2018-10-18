require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/code_for_good");
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
const Bounded_Project = require('../models/Bounded_Project');
const Donor = require('../models/Donor');
const Ongoing_Project = require('../models/Ongoing_Project');
const Sponsor = require('../models/Sponsor');
const Volunteer = require('../models/Volunteer');

try {
    const bounded_project = JSON.parse(fs.readFileSync(__dirname + '/bounded_project.json', 'utf-8'));
    const donor = JSON.parse(fs.readFileSync(__dirname + '/donor.json', 'utf-8'));
    const ongoing_project = JSON.parse(fs.readFileSync(__dirname + '/ongoing_project.json', 'utf-8'));
    const sponsor = JSON.parse(fs.readFileSync(__dirname + '/sponsor.json', 'utf-8'));
    const volunteer = JSON.parse(fs.readFileSync(__dirname + '/volunteer.json', 'utf-8'));
} catch(e) {
    console.log(e);
}

async function deleteData() {
  console.log('😢😢 Goodbye Data...');
  await Bounded_Project.remove();
  await Donor.remove();
  await Ongoing_Project.remove();
  await Sponsor.remove();
  await Volunteer.remove();
  console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
  process.exit();
}

async function loadData() {
  try {
    await Bounded_Project.insertMany(bounded_project);
    await Donor.insertMany(donor);
    await Ongoing_Project.insertMany(ongoing_project);
    await Sponsor.insertMany(sponsor);
    await Volunteer.insertMany(volunteer);    
    console.log('👍👍👍👍👍👍👍👍 Done!');
    process.exit();
  } catch(e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}