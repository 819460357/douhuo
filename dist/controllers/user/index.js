"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.prefix('');
router.post('/', async (ctx) => {
    console.log(123);
    ctx.body = 'hello world';
    return;
});
module.exports = router;
//# sourceMappingURL=index.js.map