"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Bodyparse = require("koa-bodyparser");
// @ts-ignore
const KoaConvert = require("koa-convert");
const KoaJson = require("koa-json");
const KoaLog4 = require("koa-log4");
const log4Conifg_1 = require("./config/log4Conifg");
const index_1 = require("./routes/index");
const app = new Koa();
const logger = KoaLog4.configure(log4Conifg_1.Log4Config).getLogger('app');
app.use(Bodyparse());
app.use(KoaConvert(KoaJson()));
app.use(KoaLog4.koaLogger(KoaLog4.getLogger('http'), { level: 'auto' }));
// logger
app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    let param = ctx.method === 'GET' ? ctx.request.query : ctx.request.body;
    let response = ctx.body;
    typeof (param) === 'object' && (param = JSON.stringify(param));
    typeof (response) === 'object' && (response = JSON.stringify(response));
    const info = `${ctx.method} ${ctx.url} - ${ms}ms
  request:  ${param}
  reponse:  ${response}`;
    logger.info(info);
    console.log(info);
});
//  // jwt token校验
// app.use(JwtUtils.verification());
//  // jwt 白名单过滤
// app.use(JwtKoa({ secret: BaseConfig.secret.sign }).unless({
// path: JwtUtils.whiteListFormat(BaseConfig.routes.whiteList) // 数组中的路径不需要通过jwt验证
// }));
// 引用routes
app.use(index_1.routes());
app.on('error', function (err, ctx) {
    console.log(err);
    logger.error('server error', err, ctx);
});
app.listen(3000);
//# sourceMappingURL=server.js.map