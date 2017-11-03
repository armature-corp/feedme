const SlumberDb = require("slumber-db");
const fetch = require("fetch");
const config = new SlumberDb.Config(8080, "../data");
const dbProcessor = new SlumberDb.DbProcessor(config);
const server = new SlumberDb.HttpServer(config, dbProcessor);

server.run();

export class BaseRepo {
    entityName;

    getAll() {
        return fetch(`http://localhost:8080/feedme/${entity_name}`, { method: "GET" });
    }

    get(id) {
        return fetch(`http://localhost:8080/feedme/${entity_name}/${id}`, { method: "GET" });
    }

    create(item) {
        return fetch(`http://localhost:8080/feedme/${entity_name}/${item.id}`, { method: "POST", body: item });
    }

    update(item) {
        return fetch(`http://localhost:8080/feedme/${entity_name}/${item.id}`, { method: "PUT", body: item });
    }
}