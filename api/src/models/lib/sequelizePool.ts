import { Sequelize } from 'sequelize-typescript';
import { BaseConfig } from '../../config/baseConfig';
import * as path from 'path';
export class SequelizePool {
  constructor() {
    new Sequelize(
      'douhuo',
      BaseConfig.mysql.userName,
      BaseConfig.mysql.password,
      {
        database: 'douhuo',
        dialect: 'mysql',
        // operatorsAliases: Boolean(true),
        username: BaseConfig.mysql.userName,
        password: BaseConfig.mysql.password,
        define: {
          timestamps: false,
          freezeTableName: true
        },
        modelPaths: [
          path.resolve(__dirname, '../shopping/'),
          path.resolve(__dirname, '../system/')
        ],
        modelMatch: (filename, member) => {
          return (
            filename.substring(0, filename.indexOf('.model')).toLowerCase() ===
            member.toLowerCase()
          );
        },
        pool: {
          max: 10,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        timezone: '+08:00' // 更改为北京时区
      }
    );
  }
}
