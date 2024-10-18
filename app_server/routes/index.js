// Import necessary modules and controllers
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlReviews = require('../controllers/reviews'); // Controller for reviews

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.Physics);
router.get('/signin', ctrlLocations.signin);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/Vedantu', ctrlLocations.Vedantu);
router.get('/BYJUS', ctrlLocations.BYJUS);  
router.get('/register',ctrlLocations.register);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router; // Export the router
