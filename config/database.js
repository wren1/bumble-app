const { username, password, database, host } = require('./index').db;
const config = require('./');


module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    seederStorage: 'sequelize',
  },
};
