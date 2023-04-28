import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.USERNAMEDB,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'cru_server'
});

console.log(process.env.USERNAMEDB);
console.log(process.env.PASSWORD);
console.log(process.env.HOST);
console.log(process.env.DBPORT);

export default pool;