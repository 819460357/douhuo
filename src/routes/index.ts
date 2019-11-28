import * as compose from 'koa-compose';
import * as glob from 'glob';
import { resolve } from 'path';

export function routes() {
    const routers: any = [];
    glob.sync(resolve(__dirname, '../controllers/', '**/*.ts'))
        .map(router => {
            routers.push(require(router).routes());
            routers.push(require(router).allowedMethods());
        });
    glob.sync(resolve(__dirname, '../controllers/', '**/*.js'))
        .map(router => {
            routers.push(require(router).routes());
            routers.push(require(router).allowedMethods());
        });
    return compose(routers);
}