const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

require('dotenv').config();
const app = express();
const port = 5000;


// DB connection
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});


app.use(cors());
app.use(express.json());


// Get all todos
app.get('/api/todos', async (req, res) => {
    const result = await pool.query('SELECT * FROM todos ORDER BY id');
    res.json(result.rows);
});


// Add a new todo
app.post('/api/todos', async (req, res) => {
  const { task } = req.body;
  const result = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *',[task]);
  res.status(201).json(result.rows[0]);
});


// Delete a todo
app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  res.sendStatus(204);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});