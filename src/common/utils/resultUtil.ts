export class ResultUtil {
    /**
     * 正确的结果返回
     * @param code
     * @param msg
     * @param data
     */
    static result(code: number = 0, msg: string = 'ok', data: object = {}) {
        return {code, msg, data};
    }

    /**
     * 错误结果返回
     * @param err
     * @param code
     * @param msg
     * @param data
     */
    static err(err: any, code: number = 0, msg: string = 'ok', data: object = {}) {
        let result = {code, msg, data};
        if (!err) {
            err = {};
        }
        if (typeof(err) == 'object') {
            if (typeof(err.code) == 'number' &&
                typeof(err.msg) == 'string' &&
                err.code >= code) {
                result = err;
            }
        } else if (err.toString().indexOf(result.msg.toString()) >= 0) {
            result.msg = err;
        } else if (result.msg.toString().indexOf(err.toString()) < 0) {
            result.msg += err;
        }
        return result;
    }
}