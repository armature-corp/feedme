const shortid = require("shortid");

var Feeding = function() {
    this.feedingId = shortid.generate();
    this.start;
    this.end;
}

module.exports = Feeding;