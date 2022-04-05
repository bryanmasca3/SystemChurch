const {Pool} = require('pg')
const pool = new Pool({
  user: 'admindbsm',
  host: 'localhost',
  password: '99755311',
  database: 'dbsanmartin1',
  port:5432
})

module.exports = {pool}
