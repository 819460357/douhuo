import * as Koa from 'koa';
import * as Bodyparse  from 'koa-bodyparser';
import * as JwtKoa from 'koa-jwt';
// @ts-ignore
import * as KoaConvert from 'koa-convert';
import * as KoaJson from 'koa-json';
import * as KoaLog4 from 'koa-log4';
import 'reflect-metadata';
import { BaseConfig } from './config/baseConfig';
import { Log4Config } from './config/log4Conifg';
import { JwtUtils } from './common/utils/jwtUtils';
import { routes } from './routes/index';
import { SequelizePool } from './models/lib/sequelizePool';

const app = new Koa();
const logger = KoaLog4.configure(Log4Config).getLogger('app');
new SequelizePool();
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
  const info =
  `${ctx.method} ${ctx.url} - ${ms}ms
  request:  ${param}
  reponse:  ${response}`;
  logger.info(info);
  console.log(info);
});


 // jwt token校验
app.use(JwtUtils.verification());

 // jwt 白名单过滤
app.use(JwtKoa({ secret: BaseConfig.secret.sign }).unless({
path: JwtUtils.whiteListFormat(BaseConfig.routes.whiteList) // 数组中的路径不需要通过jwt验证
}));

 // 引用routes
 app.use(routes());

app.on('error', function (err: any, ctx: any) {
  console.log(err);
  logger.error('server error', err, ctx);
});

app.listen(3000);
