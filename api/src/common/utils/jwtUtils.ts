import * as jwt from 'jsonwebtoken';
import { BaseConfig } from '../../config/baseConfig';
import * as util from 'util';
import { ResultUtil } from '../../common/utils/resultUtil';
const verify = util.promisify(jwt.verify);
export class JwtUtils {
    /**
     * 注册token
     * @param param
     * @param sign
     * @param ept
     */
    static register(param = {}, sign = BaseConfig.secret.sign, ept = '7d') {
        return jwt.sign(param, sign, { expiresIn: ept });
    }
    /**
     * 白名单格式化
     * @param list
     */
    static whiteListFormat(list: Array<string> = BaseConfig.routes.whiteList) {
        const reg_white_list = [];
        for (const i in list) {
            const str = list[i].replace(/\//g, '\/');
            const reg = new RegExp('^' + str);
            reg_white_list.push(reg);
        }
        return reg_white_list;
    }
    /**
     * token校验
     */
    static verification() {
        return async function(ctx: any, next: any) {
            const url = ctx.request.url;
            for (const i in BaseConfig.routes.whiteList) {
                if (BaseConfig.routes.whiteList[i] == url) {
                    await next();
                    return;
                }
            }
            for (const i in BaseConfig.routes.whiteList) {
                if (url.indexOf(BaseConfig.routes.whiteList[i]) > -1) {
                    await next();
                    return;
                }
            }
            const authorization = ctx.header.authorization;
            if (authorization) {
                try {
                    const token = authorization.split(' ')[1];
                    if (token) {
                        // @ts-ignore
                        const payload: any = await verify(token, BaseConfig.secret.sign);
                        const query = ctx.request.query;
                        query.user_id = payload.id;
                        ctx.request.query = query;
                    }
                    await next();
                } catch (err) {
                    if (err.name && err.name == 'TokenExpiredError') {
                        ctx.status = 401;
                        ctx.body = ResultUtil.result(401, 'Token已过期');
                    } else if (err.name && err.name == 'JsonWebTokenError') {
                        ctx.status = 401;
                        ctx.body = ResultUtil.result(401, '非法的Token');
                    } else {
                        ctx.status = 401;
                        ctx.body = ResultUtil.result(401, '认证失败');
                    }
                }
            }
            await next();
        };
    }
}
