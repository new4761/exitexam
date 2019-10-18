var express = require('express')
var router = express.Router()
var db1 = require('../db/db')
module.exports = router
router.get('/1', (req, res) => {
    res.json(db1)
})
router.get('/2', (req, res) => {
    res.json(db2)
})