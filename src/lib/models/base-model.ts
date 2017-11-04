import {IModel} from "./imodel";

export abstract class BaseModel implements IModel {
    public abstract id: string;
}