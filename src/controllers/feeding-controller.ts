import {Feeding} from '../lib/models/feeding';
import {FeedingRepo} from '../lib/repositories/feeding-repo';
import {FeedingResult} from '../lib/models/feeding-result';

const repo = new FeedingRepo();

export class FeedingController {
    start() {
        let feeding = new Feeding();
    
        feeding.start = new Date();

        return repo
            .create(feeding)
            .then(result => result.feedinId);
    }
    
    vote(venueId: string) {
        
    }
    
    end() {
        
    }
}