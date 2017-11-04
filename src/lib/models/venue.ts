const shortid = require("shortid");
import {BaseModel} from "./base-model";

export class Venue extends BaseModel {
    public id: string = shortid.generate();
    public name;
}