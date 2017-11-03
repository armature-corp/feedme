var Feeding = require('../lib/models/feeding');
var FeedingRepo = require('../lib/repositories/feeding-repo');
var FeedingResult = require('../lib/models/feeding-result');

var repo = new FeedingRepo();
var FeedingController = function() {
    this.votes = [];
    this.feeding = null;
}

FeedingController.prototype.start = function() {
    this.feeding = new Feeding();
    this.feeding.start = new Date();

    repo.create(feeding);
    return this.feedingId;
};

FeedingController.prototype.list = function() {
    return [
        'Pei Wei',
        'Urban BBQ',
        'Subway',
        'Thai Thai',
        'Taco Bell'
    ];
};

FeedingController.prototype.vote = function(keyword) {
    this.votes.push(keyword);
};

FeedingController.prototype.end = function() {
    var result = new FeedingResult();
    result.feeding = this.feeding;
    result.votes = this.votes;
    return result;
};

module.exports = FeedingController;