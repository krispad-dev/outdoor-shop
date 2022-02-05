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
            const query = 'SELECT * FROM users'
            const res = await pool.query(query)
            return res.rows
        },

        async getOne({ user_id }: { user_id: number }) {

            const query = {
                text: 'SELECT * FROM users WHERE user_id = $1',
                values: [ user_id ]
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