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

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque pulvinar urna et magna congue efficitur sed dignissim leo. 
        Proin suscipit, odio non cursus aliquam, quam erat bibendum ligula, nec 
        commodo massa turpis eu eros. Sed eget ipsum egestas, accumsan tortor 
        vitae, pulvinar leo. Pellentesque ut lacus id nisi fermentum convallis. 
        Nulla non arcu a turpis vestibulum finibus. Pellentesque neque dui, 
        egestas sit amet est id, euismod malesuada sem. Proin at suscipit urna, 
        vel commodo mi. Etiam tincidunt eget velit id hendrerit. `

    res.json({
        'x': { "comment": 'Waw super site', "reaction": 'grin-hearts-solid', "related": 'Adresse mac' },
        'z': { "comment": lorem, "reaction": 'sad-cry-solid', "related": 'Adresse mac' },
        'y': { "comment": 'Merci beaucoup pour votre aide !', "reaction": 'grin-hearts-solid', "related": 'Problème internet' },
    })
})

/* POST / */
routes.post('/', function (req, res, next) {

    // TODO : create a db youhou le fun
    console.log(req.body)

    res.send('Tout roule mon gars')
})

module.exports = routes;