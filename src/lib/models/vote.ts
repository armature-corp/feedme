const shortid = require("shortid");
import {BaseModel} from "./base-model";

export class Vote extends BaseModel {
    public id: string = shortid.generate();
    public feedingId;
    public venueId;
}