import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Check if DATABASE_URL is provided, otherwise use mock mode
const useMockDb = !process.env.DATABASE_URL;

export const pool = useMockDb ? null : new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
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

    // Temperatures table
    await client.query(`
      CREATE TABLE IF NOT EXISTS temperatures (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        temp_6 DECIMAL(4,1) NOT NULL,
        temp_12 DECIMAL(4,1) NOT NULL,
        temp_18 DECIMAL(4,1) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(date)
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

    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Database initialization error:', error);
  } finally {
    client.release();
  }
}

// Initialize on startup
initDatabase();
