const SlumberDb = require("slumber-db");
const fetch = require("fetch");
const config = new SlumberDb.Config(9501, "../data");
const dbProcessor = new SlumberDb.DbProcessor(config);
const server = new SlumberDb.HttpServer(config, dbProcessor);

server.run();

export abstract class BaseRepo {
    protected entityName: string;

    public getAll() {
        return fetch(`http://localhost:9501/feedme/${this.entityName}`, { method: "GET" });
    }

    public get(id) {
        return fetch(`http://localhost:9501/feedme/${this.entityName}/${id}`, { method: "GET" });
    }

    public create(item) {
        return fetch(`http://localhost:9501/feedme/${this.entityName}/${item.id}`, { method: "POST", body: item });
    }

    public update(item) {
        return fetch(`http://localhost:9501/feedme/${this.entityName}/${item.id}`, { method: "PUT", body: item });
    }
}