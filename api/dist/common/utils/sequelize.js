"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('douhuo', 'root', '123456', {
    host: 'localhost',
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
//# sourceMappingURL=sequelize.js.map