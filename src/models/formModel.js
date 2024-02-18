const path = require('path');
const pool = require(path.resolve(__dirname,'db','db_connection.js'));

// Funções CRUD

async function getAllClientes() {
  const results = await pool.query('SELECT * FROM Cliente');
  return results.rows;
}

async function getClienteById(id) {
  const results = await pool.query('SELECT * FROM Cliente WHERE id = $1', [id]);
  return results.rows[0];
}

async function createCliente(nameCli, email, phoneNumber, messageSended) {
  const results = await pool.query(
    'INSERT INTO Cliente (nameCli, email, phoneNumber, messageSended) VALUES ($1, $2, $3, $4) RETURNING *',
    [nameCli, email, phoneNumber, messageSended]
  );
  return results.rows[0];
}

async function updateCliente(id, nameCli, email, phoneNumber, messageSended) {
  const results = await pool.query(
    'UPDATE Cliente SET nameCli = $1, email = $2, phoneNumber = $3, messageSended = $4 WHERE id = $5 RETURNING *',
    [nameCli, email, phoneNumber, messageSended, id]
  );
  return results.rows[0];
}

async function deleteCliente(id) {
  await pool.query('DELETE FROM Cliente WHERE id = $1', [id]);
}

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
