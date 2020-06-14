let routes = require('express').Router()
let feedback = require('../../lib/feedback/feedback')

/* GET /?id=x,y,z */
routes.get('/', function (req, res, next) {
    if (!req.query.id) {
        res.status(422).json({ "message": "Query parameter 'id' is missing" })
        return
    }
    const ids = req.query.id.split(',')
    let fb = new feedback()
    let answer = fb.get(ids)
    res.status(200).json(answer)
})

/* POST / */
routes.post('/', function (req, res, next) {
    if (!req.body) {
        res.status(400).json({ "message": "json format is required" })
        return
    }

    if ('reaction' in req.body) {
        if (!(['positive', 'negative', 'neutral'].includes(req.body.reaction))) {
            res.status(422).json({ "message": "missing property" })
            return
        }
    } else {
        res.status(422).json({ "message": "missing property" })
        return      
    }
    
    if ((!('comment' in req.body) || !('diagram' in req.body))) {
        res.status(422).json({ "message": "missing property" })
        return
    }

    let fb = new feedback()
    if (fb.save(req.body)) {
        res.status(200).json({"message":"OK"})
        return
    }
    res.status(422).json({ "message": "missing property" })
})

module.exports = routes;