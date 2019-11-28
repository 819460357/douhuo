"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResultUtil {
    /**
     * 正确的结果返回
     * @param code
     * @param msg
     * @param data
     */
    static result(code = 0, msg = 'ok', data = {}) {
        return { code, msg, data };
    }
    /**
     * 错误结果返回
     * @param err
     * @param code
     * @param msg
     * @param data
     */
    static err(err, code = 0, msg = 'ok', data = {}) {
        let result = { code, msg, data };
        if (!err) {
            err = {};
        }
        if (typeof (err) == 'object') {
            if (typeof (err.code) == 'number' &&
                typeof (err.msg) == 'string' &&
                err.code >= code) {
                result = err;
            }
        }
        else if (err.toString().indexOf(result.msg.toString()) >= 0) {
            result.msg = err;
        }
        else if (result.msg.toString().indexOf(err.toString()) < 0) {
            result.msg += err;
        }
        return result;
    }
}
exports.ResultUtil = ResultUtil;
//# sourceMappingURL=resultUtil.js.map