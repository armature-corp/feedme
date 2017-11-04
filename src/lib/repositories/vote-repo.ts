import { BaseRepo } from "./base-repo";
import { Vote } from "../models/vote";

export class VenueRepo extends BaseRepo<Vote> {
    public entityName: string = "vote";
}