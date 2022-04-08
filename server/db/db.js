const Sequelize = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://${process.env.REACT_APP_DATABASE_CREDENTIALS}@localhost:5432/messenger`,
  {
    logging: false,
  }
)

module.exports = db
