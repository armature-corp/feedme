import { VenueRepo } from 'lib/repositories/venue-repo';

const repo = new VenueRepo();

export class VenueController {
    list() {
        return repo.getAll();
    }
}