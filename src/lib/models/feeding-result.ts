import {Feeding} from "./feeding";
import {Vote} from "./vote";

export class FeedingResult {
    public feeding: Feeding;
    public votes: Array<Vote> = [];
}