import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
    'douhuo',
    'root',
    '123456',
    {
        host: 'localhost',
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