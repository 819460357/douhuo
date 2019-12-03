"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_model_1 = require("../models/store.model");
class UserService {
    /**
     * 登录
     */
    async login() {
        const storeModel = new store_model_1.Store();
        console.log(await store_model_1.Store.findAll());
        return 123;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map