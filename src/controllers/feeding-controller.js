import { Feeding } from 'lib/models/feeding';
import { FeedingResult } from 'lib/models/feeding-result';

export class FeedingController {
    constructor() {
        this.votes = [];
        this.feeding = null;
    }

    start() {
        let instance = new Feeding();
        instance.start = new Date();
        return instance.feedingId;
    }
    
    list() {
        return [
            'Pei Wei',
            'Urban BBQ',
            'Subway',
            'Thai Thai',
            'Taco Bell'
        ];
    }
    
    vote(keyword) {
        this.votes.push(keyword);
    }
    
    end() {
        let result = new FeedingResult();
        result.feeding = this.feeding;
        result.votes = this.votes;
        return result;
    }
}