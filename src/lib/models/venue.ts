const shortid = require("shortid");

export class Venue {
    venueId = shortid.generate();
    name;
}