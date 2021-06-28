const express = require('express')
const router = express.Router()

const JobCtrl = require('../controllers/jobController')

router.post('/jobs', JobCtrl.createNewJob)

router.get('/jobs', JobCtrl.fetchJobs)

router.get('/jobs/:id', JobCtrl.fetchSingleJob)

router.put('/jobs/:id', JobCtrl.updateSingleJob)

router.delete('/jobs/:id', JobCtrl.deleteSingleJob)

module.exports = router