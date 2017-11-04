import {shortid} from "shortid";
import {BaseModel} from "./base-model";

export class Feeding extends BaseModel {
    public id: string = shortid.generate();
    public start: Date;
    public end: Date;
}