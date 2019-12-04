"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const baseConfig_1 = require("../../config/baseConfig");
const util = require("util");
const resultUtil_1 = require("../../common/utils/resultUtil");
const verify = util.promisify(jwt.verify);
class JwtUtils {
    /**
     * 注册token
     * @param param
     * @param sign
     * @param ept
     */
    static register(param = {}, sign = baseConfig_1.BaseConfig.secret.sign, ept = '7d') {
        return jwt.sign(param, sign, { expiresIn: ept });
    }
    /**
     * 白名单格式化
     * @param list
     */
    static whiteListFormat(list = baseConfig_1.BaseConfig.routes.whiteList) {
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
        return async function (ctx, next) {
            const url = ctx.request.url;
            for (const i in baseConfig_1.BaseConfig.routes.whiteList) {
                if (baseConfig_1.BaseConfig.routes.whiteList[i] == url) {
                    await next();
                    return;
                }
            }
            for (const i in baseConfig_1.BaseConfig.routes.whiteList) {
                if (url.indexOf(baseConfig_1.BaseConfig.routes.whiteList[i]) > -1) {
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
                        const payload = await verify(token, baseConfig_1.BaseConfig.secret.sign);
                        const query = ctx.request.query;
                        query.user_id = payload.id;
                        ctx.request.query = query;
                    }
                    await next();
                }
                catch (err) {
                    if (err.name && err.name == 'TokenExpiredError') {
                        ctx.status = 401;
                        ctx.body = resultUtil_1.ResultUtil.result(401, 'Token已过期');
                    }
                    else if (err.name && err.name == 'JsonWebTokenError') {
                        ctx.status = 401;
                        ctx.body = resultUtil_1.ResultUtil.result(401, '非法的Token');
                    }
                    else {
                        ctx.status = 401;
                        ctx.body = resultUtil_1.ResultUtil.result(401, '认证失败');
                    }
                }
            }
            await next();
        };
    }
}
exports.JwtUtils = JwtUtils;
//# sourceMappingURL=jwtUtils.js.map