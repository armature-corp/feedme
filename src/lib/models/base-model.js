const SlumberDb = require("slumber-db");
const fetch = require("fetch");
const config = new SlumberDb.Config(8080, "../data");
const dbProcessor = new SlumberDb.DbProcessor(config);
const server = new SlumberDb.HttpServer(config, dbProcessor);

server.run();

export class BaseModel {
    

    get(id) {
        
    }

    save(item) {
        
    }
}