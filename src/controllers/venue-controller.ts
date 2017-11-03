import { VenueRepo } from '../lib/repositories/venue-repo';

const repo = new VenueRepo();

export class VenueController {
    public list() {
        return repo.getAll();
    }
}
