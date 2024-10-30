import { Client } from 'pg';

// Create a PostgreSQL client instance
const client = new Client({
    user: 'user_ts',         // replace with your PostgreSQL username
    host: 'localhost',             // replace with your PostgreSQL host
    database: 'ts_database',     // replace with your PostgreSQL database
    password: 'Durga@41003',     // replace with your PostgreSQL password
    port: 5432,                    // default PostgreSQL port
});

async function connectToDatabase() {
    try {
        // Connect to the PostgreSQL database
        await client.connect();
        console.log('Connected to PostgreSQL database successfully!');

        // Run a test query
        const res = await client.query('SELECT NOW()');
        console.log('Current Time:', res.rows[0]);

    } 
    catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    } 
    finally {
        // Close the connection
        await client.end();
        console.log('Connection closed');
    }
}

// Call the function to connect to the database
connectToDatabase();
