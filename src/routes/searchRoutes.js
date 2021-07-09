const searchCtrl = require('../controllers/searchController')
const express = require('express')
const router = express.Router()

router.get('/search', searchCtrl.search)

module.exports = router