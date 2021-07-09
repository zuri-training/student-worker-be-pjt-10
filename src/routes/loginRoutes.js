const express = require('express')
const router = express.Router()

// this file holds the corresponding functions to these routes
const loginCtrl = require('../controllers/loginController');

//employer login route
// router.post('/employerLogin', loginCtrl.employerLogin);

// student login route
router.post('/loginStudent', loginCtrl.loginStudent);

router.post('/loginEmployer', loginCtrl.loginEmployer);


// you have to export the router variable for this to work
module.exports = router