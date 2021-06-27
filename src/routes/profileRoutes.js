

const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

// this file holds the corresponding functions to these routes
const profileCtrl = require('../controllers/strudentProfile')

router.post('/students',auth,profileCtrl.updateProfile)
router.get('/students/:id',auth,profileCtrl.fetchStudentProfile)

module.exports = router

