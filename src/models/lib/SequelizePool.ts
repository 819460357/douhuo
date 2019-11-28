import { Sequelize } from 'sequelize';
import { BaseConfig } from '../../config/baseConfig';
let sequelize = new Sequelize(
    BaseConfig.mysql.dataName,
    BaseConfig.mysql.userName,
    BaseConfig.mysql.password,
    {
        host: BaseConfig.mysql.host,
        dialect: 'mysql',
        pool: {
            max: 10,
            acquire: 30000,
            idle: 10000
        }
    }
);

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

export const sequelizePool = sequelize;