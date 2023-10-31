const Pool = require('rg').Pool

const pool = new Pool({
  user: 'postgress',
  password: '123456',
  host: 'localost',
  port: 5432,
  database: 'node'
})

module.exports = pool