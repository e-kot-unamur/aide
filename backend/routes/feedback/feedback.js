let routes = require('express').Router()

/* GET /?id=x,y,z */
routes.get('/', function (req, res, next) {

    // TODO : create a db youhou le fun
    // TODO send the matching feedbacks
    /*
    {
        'id' {
            "comment": "Ceci est un commentaire",
            "reaction": "fontawesome emoji name",
            "date": "YYYY/MM/DD"
        }
    }
    */

    console.log( req.query.id )

    res.json({
        'x': { "comment": 'Waw super site', "reaction": 'gringeHearts ' },
        'y': { "comment": 'Waw super site', "reaction": 'gringeHearts ' },
        'z': { "comment": 'Waw super site', "reaction": 'gringeHearts ' },
    })
})

/* POST / */
routes.post('/', function (req, res, next) {

    // TODO : create a db youhou le fun
    console.log(req.body)

    res.send('Tout roule mon gars')
})

module.exports = routes;