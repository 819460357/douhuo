"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequelizePool_1 = require("./lib/SequelizePool");
class UserModel extends sequelize_1.Model {
}
console.log(UserModel);
UserModel.init({
    _modify_time: sequelize_1.DataTypes.INTEGER,
    modify_user_id: sequelize_1.DataTypes.STRING,
    _create_time: sequelize_1.DataTypes.INTEGER,
    _create_user_id: sequelize_1.DataTypes.INTEGER,
    id: sequelize_1.DataTypes.INTEGER,
    is_delete: sequelize_1.DataTypes.TINYINT,
    is_active: sequelize_1.DataTypes.TINYINT,
    name: sequelize_1.DataTypes.STRING,
    sex: sequelize_1.DataTypes.TINYINT,
    phone: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    nick: sequelize_1.DataTypes.STRING,
    wechat_open_id: sequelize_1.DataTypes.STRING,
    wechat_nickname: sequelize_1.DataTypes.STRING,
    wechat_sex: sequelize_1.DataTypes.STRING,
    wechat_headimgurl: sequelize_1.DataTypes.STRING,
    wechat_headimg_md5: sequelize_1.DataTypes.STRING,
    memo: sequelize_1.DataTypes.STRING
}, {
    // @ts-ignore
    sequelizePool: SequelizePool_1.sequelizePool,
    modelName: 'user'
});
module.exports = UserModel;
//# sourceMappingURL=UserModel.js.map