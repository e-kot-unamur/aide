// You need to import your diagrams 
const diagramInternet = require('./1/diagram.json')
const diagramMac = require('./2/diagram.json')

//Add them to this list 
//The key is the folder name
const exportList = {
    '1' : diagramInternet,
    '2' : diagramMac,
}

module.exports = exportList