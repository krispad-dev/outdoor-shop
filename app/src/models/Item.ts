import { pool } from '../database/pg'


interface Item {

    name: string;
    isPurchased: boolean;
    description?: string

}


export function Item() {

    return {

        async getAll() {
            const res = await pool.query('SELECT * FROM products')
            return res.rows
        },

        async addOne({ name, isPurchased }: Item) {

            const query = {
                text:'INSERT INTO items(name, is_purchased) VALUES($1, $2)',
                values: [name, isPurchased],
                rowMode: 'array',
              }
              

            const res = await pool.query(query)
            return res.rows
        }

    }

}