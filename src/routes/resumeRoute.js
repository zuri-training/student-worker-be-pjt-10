const express = require('express')
const Student = require('../models/student')
const jwt = require('jsonwebtoken')
const resumeCtrl = require('../controllers/resumeController')

const router = express.Router()

router.post('/createResume', resumeCtrl.createResume);

module.exports = router