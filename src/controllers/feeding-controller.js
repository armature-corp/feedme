import { Feeding } from 'lib/models/feeding';

export class FeedingController {
    constructor() {
        this.state = {
            currentFeedingId: 1,
            feedings: []
        };
    }

    start() {
        let instance = new Feeding();
        instance.feedingId = this.state.currentInstanceId++;
        this.state.feedings.push(instance);
        return instance.feedingId;
    }
    
    list() {
        // TODO
    }
    
    vote(venueId) {
        // TODO
    }
    
    end() {
        // TODO
    }
}