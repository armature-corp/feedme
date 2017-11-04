import {Feeding} from '../lib/models/feeding';
import {Vote} from '../lib/models/vote';
import {FeedingRepo} from '../lib/repositories/feeding-repo';
import {FeedingResult} from '../lib/models/feeding-result';

const repo = new FeedingRepo();

export class FeedingController {
    public start(): Promise<Feeding> {
        let feeding = new Feeding();
    
        feeding.start = new Date();

        return repo.create(feeding);
    }
    
    public vote(venueId: string): Promise<Vote> {
        throw new Error("// TODO");
    }
    
    public end(): Promise<Feeding> {
        throw new Error("// TODO");
    }
}