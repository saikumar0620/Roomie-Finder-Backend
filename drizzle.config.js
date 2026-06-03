import {defineConfig} from 'drizzle-kit';

export default defineConfig({
  Dialect: 'postgresql ',

  schema: './src/db/schema.js',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  },
  verbose: true, // this will print the generated SQL queries in the console
  strict: true, // this will throw an error if there are any missing fields in the schema
});