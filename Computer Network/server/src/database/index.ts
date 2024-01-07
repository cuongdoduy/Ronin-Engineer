import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
console.log('ENV: ', process.env.ENV);
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

const client = new Pool({
  host: (POSTGRES_HOST as string),
  database: process.env.ENV === 'dev' ? (POSTGRES_DB as string) : 'full_stack_test',
  user: (POSTGRES_USER as string),
  password:(POSTGRES_PASSWORD as string),
  port: process.env.ENV === 'dev' ? 5432 : 5433
});

export default client;
