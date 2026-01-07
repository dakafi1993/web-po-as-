import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Check if DATABASE_URL is provided, otherwise use mock mode
const useMockDb = !process.env.DATABASE_URL;

export const pool = useMockDb ? null : new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { 
    rejectUnauthorized: false 
  } : false
});

// Mock in-memory database for development without PostgreSQL
export const mockDb = {
  users: [],
  temperatures: [],
  articles: [],
  photos: []
};

// Database initialization
export async function initDatabase() {
  if (useMockDb) {
    console.log('⚠️  Using MOCK database (in-memory) - data will be lost on restart!');
    console.log('💡 For persistent data, set DATABASE_URL in .env file');
    
    // Create default admin user in mock mode
    mockDb.users.push({
      id: 1,
      email: process.env.ADMIN_EMAIL || 'admin@meteostanice.cz',
      password: '$2a$10$rGZ1qZ5XqK1nKx.YrZ4qUe9vZ4XqK1nKx.YrZ4qUe9vZ4XqK1nKx.',  // 'admin123'
      name: process.env.ADMIN_NAME || 'Admin',
      created_at: new Date()
    });
    
    return;
  }
  
  const client = await pool.connect();
  
  try {
    // Users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Temperatures table - drop and recreate to ensure correct schema
    await client.query(`DROP TABLE IF EXISTS temperatures`);
    await client.query(`
      CREATE TABLE temperatures (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        time VARCHAR(10) NOT NULL,
        temperature DECIMAL(4,1) NOT NULL,
        humidity DECIMAL(4,1),
        pressure DECIMAL(6,1),
        wind_speed DECIMAL(5,1),
        precipitation DECIMAL(5,1),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Articles table
    await client.query(`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) UNIQUE NOT NULL,
        content TEXT NOT NULL,
        author VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Photos table
    await client.query(`
      CREATE TABLE IF NOT EXISTS photos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        description TEXT,
        url VARCHAR(1000) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create default admin user if not exists, or update password if exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@meteostanice.cz';
    const adminPassword = '$2a$10$4xkrQptclJol2Ta6k28.GO6Dr0MZqYluOZzfxGKjWicRrl8O71I/.'; // Admin123Meteo!
    const adminName = process.env.ADMIN_NAME || 'Josef Soukup';
    
    const userCheck = await client.query('SELECT id FROM users WHERE email = $1', [adminEmail]);
    if (userCheck.rows.length === 0) {
      await client.query(
        'INSERT INTO users (email, password, name) VALUES ($1, $2, $3)',
        [adminEmail, adminPassword, adminName]
      );
      console.log('✅ Admin user created:', adminEmail);
    } else {
      // Update password to ensure it matches
      await client.query(
        'UPDATE users SET password = $1 WHERE email = $2',
        [adminPassword, adminEmail]
      );
      console.log('✅ Admin password updated:', adminEmail);
    }

    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Database initialization error:', error);
  } finally {
    client.release();
  }
}

// Initialize on startup
initDatabase();
