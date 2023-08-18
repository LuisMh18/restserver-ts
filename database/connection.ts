import { Sequelize } from 'sequelize';

const db = new Sequelize('rest_server_ts_db', 'root', 'LuisMh181093', {
    host: '127.0.0.1',
    dialect: 'mysql',
    //logging: false
});

export default db;