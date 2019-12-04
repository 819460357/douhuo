"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const baseConfig_1 = require("../../config/baseConfig");
const path = require("path");
class SequelizePool {
    constructor() {
        new sequelize_typescript_1.Sequelize('douhuo', baseConfig_1.BaseConfig.mysql.userName, baseConfig_1.BaseConfig.mysql.password, {
            database: 'douhuo',
            dialect: 'mysql',
            // operatorsAliases: Boolean(true),
            username: baseConfig_1.BaseConfig.mysql.userName,
            password: baseConfig_1.BaseConfig.mysql.password,
            define: {
                timestamps: false,
                freezeTableName: true
            },
            modelPaths: [path.resolve(__dirname, '../')],
            modelMatch: (filename, member) => {
                return (filename.substring(0, filename.indexOf('.model')) ===
                    member.toLowerCase());
            },
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            timezone: '+08:00' // 更改为北京时区
        });
    }
}
exports.SequelizePool = SequelizePool;
//# sourceMappingURL=sequelizePool.js.map