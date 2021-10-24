import { Sequelize } from 'sequelize';
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB ?? '', process.env.DB_USERNAME ?? '', process.env.DB_PASSWORD ?? "", {
  host: process.env.DB_HOST ?? '',
  dialect: 'postgres',
});


export default sequelize;