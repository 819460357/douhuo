"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const UserService_1 = require("../../services/UserService");
const router = new Router();
router.prefix('');
router.post('/', async (ctx) => {
    await new UserService_1.UserService().login();
    ctx.body = 'hello world';
    return;
});
module.exports = router;
//# sourceMappingURL=index.js.map