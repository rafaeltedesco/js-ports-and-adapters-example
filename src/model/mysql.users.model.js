const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'ports_and_adapters_example'
})


const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
}

const create = async (userData) => {
  const [{ insertId }] = await connection.execute('INSERT INTO users (name) VALUES (?)', [userData.name]);
  return {
    id: insertId,
    ...userData
  }
}

module.exports = {
  getAll,
  create
}