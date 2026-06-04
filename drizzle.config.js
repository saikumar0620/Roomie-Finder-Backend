import {defineConfig} from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema/index.js',
  out: './src/db/migrations',
  // driver: 'pg',
  dbCredentials: {
    url: process.env.DATABASE_URL
  },
  ssl: {
    rejectUnauthorized: true
  },
  verbose: true, // this will print the generated SQL queries in the console
  strict: true, // this will throw an error if there are any missing fields in the schema
});