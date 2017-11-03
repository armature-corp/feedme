const shortid = require("shortid");

export class Feeding {
    feedingId = shortid.generate();
    start;
    end;
}