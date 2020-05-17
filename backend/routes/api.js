const diagrams = require('../diagram')

var express = require('express')
var router = express.Router()

// Testing route
router.get('/', function(req, res, next) {
    res.send('API is working properly')
})

// Send the json diagram required
// If the requested diagram does not exist, the json will be empty
router.get('/diagram/:name', function(req, res, next) {
    const requestedDiagram = diagrams[req.params.name]
    requestedDiagram ? res.json(requestedDiagram) : res.json({})
})

module.exports = router