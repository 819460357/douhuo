"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const baseConfig_1 = require("../../config/baseConfig");
const sequelize = new sequelize_1.Sequelize(baseConfig_1.BaseConfig.mysql.dataName, baseConfig_1.BaseConfig.mysql.userName, baseConfig_1.BaseConfig.mysql.password, {
    host: baseConfig_1.BaseConfig.mysql.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        acquire: 30000,
        idle: 10000
    }
});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.sequelizePool = sequelize;
//# sourceMappingURL=SequelizePool.js.map