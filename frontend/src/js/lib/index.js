// api address  
//FIXME - Don't know how to do this properly - .env ? 
const url = 'http://akap.unamur.be:71/api'

// endpoints
const diagram = '/diagram/' //require an argument
const diagrams = '/diagrams/'

const endpoints = {
    'diagram' : diagram,
    'diagrams' : diagrams,
}

export {
    url,
    endpoints
}