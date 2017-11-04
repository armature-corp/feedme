import * as SlumberDb from "slumber-db";
import fetch, {RequestInit} from "node-fetch";
import {IModel} from "../models/imodel";

const port = 8081;
const config = new SlumberDb.Config(port, "../data");
const dbProcessor = new SlumberDb.DbProcessor(config);
const server = new SlumberDb.HttpServer(config, dbProcessor);
const baseUrl = `http://localhost:${port}/feedme`;

server.run();

export abstract class BaseRepo<T extends IModel> {
    protected abstract entityName: string;

    public getAll() {
        return fetch(`${this.entityName}`, { method: "GET" });
    }

    public get(id): Promise<T> {
        let url = this.makeUrl(id);
        let request = this.makeRequest();
        
        return fetch(url, request).then(r => r.json());
    }

    public create(item: T): Promise<T> {
        let url = this.makeUrl();
        let request = this.makeRequest("POST", item);
        
        return fetch(url, request).then(r => item);
    }

    public update(item: T): Promise<T> {
        let url = this.makeUrl(item.id);
        let request = this.makeRequest("PUT", item);
        
        return fetch(url, request).then(r => item);
    }

    public delete(itemOrId: any|T): Promise<any> {
        let url = this.makeUrl(itemOrId.id || itemOrId);
        let request = this.makeRequest("DELETE");
        
        return fetch(url, request).then(r => null);
    }
    
    protected makeUrl(...segments: string[]): string {
        let url = [ 
            baseUrl, 
            this.entityName, 
            ...segments
        ].join("/");
        
        return url;
    }
    
    protected makeRequest(method: string = "GET", body: any = null) {
        var request: RequestInit = {
            method: method
        };
        
        if (body != null) {
            request.body = JSON.stringify(body);
        }
        
        return request;
    }
}