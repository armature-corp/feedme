import { BaseRepo } from "./base-repo";
import { Venue } from "../models/venue";

export class VenueRepo extends BaseRepo<Venue> {
    public entityName: string = "venue";
}