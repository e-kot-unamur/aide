let express = require('express')
let router = express.Router()
const diagrams = require('../../public/diagrams')

// Send first node of all diagrams (object having key 0) 
// Useful to get the number of them and their utility 
// without having to load all of them 
router.get('/', function (req, res, next) {
    let firstNodes = {}
    for (let [key, diagram] of Object.entries(diagrams)) {
        firstNodes[key] = diagram[0]
    }
    res.json(firstNodes)
})

module.exports = router;