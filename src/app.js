const express = require('express');
const app = express();

var FeedingController = require('controllers/feeding-controller');

app.get('/api/feeding/list', function (req, res) {
    res.send('list');
});

app.post('/api/feeding/start', function(req, res) {
    res.send('start');
});

app.post('/api/feeding/vote', function(req, res) {
    res.send('vote');
});

app.post('/api/feeding/end', function(req, res) {
    res.send('end');
});

app.listen(3000, function () {
  console.log('Feedme listening on port 3000!')
});

