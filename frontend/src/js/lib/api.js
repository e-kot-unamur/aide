// api address  
//FIXME - Don't know how to do this properly - .env ? 
const url = 'http://localhost:8080'

// Contact address 
const contact = 'https://www.messenger.com/t/ekotnamur'

// endpoints
const staticImages = '/diagrams/' //static files
const diagram = '/api/diagram/' //require an argument
const diagrams = '/api/diagrams/'
const feedback = '/api/feedback/'
const feedbacks = '/api/feedbacks/'

const endpoints = {
    'staticImages' : staticImages,
    'diagram' : diagram,
    'diagrams' : diagrams,
    'feedback' : feedback,
    'feedbacks' : feedbacks,
}

export {
    url,
    endpoints,
    contact
}