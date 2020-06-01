const diagrams = require('../public/diagrams')

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

// Send first node of all diagrams (object having key 0) 
// Useful to get the number of them and their utility 
// without having to load all of them 
router.get('/diagrams', function(req, res, next) {
    let firstNodes = {}
    for (let [key, diagram] of Object.entries(diagrams)) {
        firstNodes[key] = diagram[0]
    }
    res.json(firstNodes)
})

module.exports = router