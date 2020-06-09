let routes = require('express').Router()

/* Default */
routes.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* API routes */
/* Diagram related */
let diagram = require("./diagram/diagram");
let diagrams = require("./diagram/diagrams");
routes.use('/diagram', diagram);
routes.use('/diagrams', diagrams);
/* Feedback related */
let feedback = require("./feedback/feedback");
let feedbacks = require("./feedback/feedbacks");
routes.use('/feedback', feedback);
routes.use('/feedbacks', feedbacks);

module.exports = routes