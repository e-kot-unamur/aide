let routes = require('express').Router()

routes.get('/', function (req, res, next) {

    /*
    {
        'total': XX,
        'ids': ['id_1', ..., 'id_XX']
    }
    */
    console.log(req.body)

    res.json({
        'total': 3,
        'ids': ['id_1', 'id_2', 'id_3']
    })
})

module.exports = routes;