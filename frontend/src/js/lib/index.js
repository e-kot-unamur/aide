// api address  
//FIXME - Don't know how to do this properly - .env ? 
const url = 'http://localhost:8083'

// endpoints
const staticImages = '/diagrams/' //static files
const diagram = '/api/diagram/' //require an argument
const diagrams = '/api/diagrams/'

const endpoints = {
    'staticImages' : staticImages,
    'diagram' : diagram,
    'diagrams' : diagrams,
}

export {
    url,
    endpoints
}