import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'learning',
    dialect: 'mysql',
    username: 'root',
    password: 'Bigstep@123',
    logging: true,
});

export default sequelize;