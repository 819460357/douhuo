"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = require("koa-compose");
const glob = require("glob");
const path_1 = require("path");
function routes() {
    const routers = [];
    glob.sync(path_1.resolve(__dirname, '../controllers/', '**/*.ts'))
        .map(router => {
        routers.push(require(router).routes());
        routers.push(require(router).allowedMethods());
    });
    glob.sync(path_1.resolve(__dirname, '../controllers/', '**/*.js'))
        .map(router => {
        routers.push(require(router).routes());
        routers.push(require(router).allowedMethods());
    });
    return compose(routers);
}
exports.routes = routes;
//# sourceMappingURL=index.js.map