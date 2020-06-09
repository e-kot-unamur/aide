let express = require('express')
let router = express.Router()
const diagrams = require('../../public/diagrams')

// Send the json diagram required
// If the requested diagram does not exist, the json will be empty
router.get('/:name', function (req, res, next) {
    const requestedDiagram = diagrams[req.params.name]
    requestedDiagram ? res.json(requestedDiagram) : res.json({})
})

module.exports = router;