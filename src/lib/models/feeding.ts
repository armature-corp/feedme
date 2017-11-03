import {shortid} from "shortid";

export class Feeding {
    public feedingId: string = shortid.generate();
    public start: Date;
    public end: Date;
}