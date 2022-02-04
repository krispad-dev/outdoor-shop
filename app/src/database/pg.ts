import { Pool } from 'pg'
import 'dotenv/config';


 export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
      },
    max: 10
})

