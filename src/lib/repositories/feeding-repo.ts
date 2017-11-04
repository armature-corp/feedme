import { BaseRepo } from "./base-repo";
import { Feeding } from "../models/feeding";

export class FeedingRepo extends BaseRepo<Feeding> {
    public entityName: string = "feeding";
}