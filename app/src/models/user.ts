import { pool } from '../database/pg'

interface User {
    user_name: string;
    email: string;
    user_password: string;
    role: string;
}

export function User() {

    return {

        async getAll() {
            const query = 'SELECT user_name, email, role FROM users'
            const res = await pool.query(query)
            return res.rows
        },

        async getOne({ email }: { email: string }) {

            const query = {
                text: 'SELECT user_name, user_id, email, role, user_password FROM users WHERE email = $1',
                values: [ email ]
            }

            const res = await pool.query(query)
            return res.rows[0]
        },

        async addOne({ user_name, email, user_password, role }: User) {

            const query = {
                text: 'INSERT INTO users(user_name, email, user_password, role) VALUES($1, $2, $3, $4)',
                values: [user_name, email, user_password, role]
            }

            const res = await pool.query(query)
            return res.rows
        },
    }
}