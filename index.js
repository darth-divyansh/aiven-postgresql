require('dotenv').config();
const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Configure the PostgreSQL client
const client = new Client({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DATABASE_SSL_CERT,
    },
});

// Connect to the database
client.connect().catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});

// Define API endpoints
app.get('/api/data', async (req, res) => {
    try {
        const result = await client.query('SELECT customer_id, first_name, last_name, email FROM customer LIMIT 10'); // Replace 'your_table'
        res.json(result.rows);
    } catch (err) {
        console.error('Query error:', err);
        res.status(500).send('Internal Server Error');
    }
});

// module.exports= app;

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
