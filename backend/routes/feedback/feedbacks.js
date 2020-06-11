let routes = require('express').Router()
let feedback = require('../../lib/feedback/feedback')

routes.get('/', function (req, res, next) {
    /*
    {
        'total': XX,
        'ids': ['id_1', ..., 'id_XX']
    }
    */
    
    let fb = new feedback()
    const [total, ids] = fb.getMetadata()
    const answer = {"total": total, "ids": ids}
    res.status(200).json(answer)
})

module.exports = routes;