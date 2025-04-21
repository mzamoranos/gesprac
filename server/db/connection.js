import pkg from "pg";
import { config } from "dotenv";

config();

const { Pool } = pkg;

const pool = new Pool({
  //connectionString: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.connect()
  .then(() => console.log("🟢 Conectado a PostgreSQL"))
  .catch((err) => console.error("🔴 Error en la conexión", err));

export default pool;
