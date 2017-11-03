import * as express from "express";
import { VenueController } from "./controllers/venue-controller";
import { FeedingController } from "./controllers/feeding-controller";

const app = express();
const venueController = new VenueController();
const feedingController = new FeedingController();

app.get('/api/venues', function(req, res) {
    res.send(venueController.list());
});

app.put('/api/feedings/start', function(req, res) {
    res.send(feedingController.start());
});

app.put('/api/feedings/vote', function(req, res) {
    res.send(feedingController.vote(req.body.venueId));
});

app.put('/api/feedings/end', function(req, res) {
    res.send(feedingController.end());
});

app.listen(8080, function() {
    console.log('Feedme listening on port 8080!')
});
