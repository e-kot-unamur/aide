// You need to import (use require due to express js) here your diagrams 
const diagramInternet = require('./internet.json')
const diagramMac = require('./mac.json')

//Add them to this list 
const exportList = {
    'internet' : diagramInternet,
    'mac' : diagramMac,
}

module.exports = exportList