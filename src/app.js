const express = require('express');
const app = express();

var FC = require('./controllers/feeding-controller');
var Controller = new FC();

app.get('/api/feeding/list', function (req, res) {
    res.send( Controller.list() );
});

app.put('/api/feeding/start', function(req, res) {
    res.send( Controller.start() );
});

app.put('/api/feeding/vote', function(req, res) {
    res.send( Controller.vote(req.body.venueId) );
});

app.put('/api/feeding/end', function(req, res) {
    res.send( Controller.end() );
});

app.listen(3000, function () {
  console.log('Feedme listening on port 3000!')
});

