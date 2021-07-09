const express = require('express')
const Student = require('../models/student')
const jwt = require('jsonwebtoken')
const employerCtrl = require('../controllers/employerController')

const router = express.Router()

router.post('/employerProfile', employerCtrl.employerProfile);

module.exports = router