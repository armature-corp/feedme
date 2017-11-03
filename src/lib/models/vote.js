const shortid = require("shortid");

export class Vote {
    voteId = shortid.generate();
    feedingId;
    venueId;
}