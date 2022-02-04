import { pool } from '../database/pg'


interface Cart {

    user_id: number;
    product_id: number;
    item_count: number;

}

interface GetAll {

    user_id: number;
}


export function Cart() {

    return {

        async getAll({ user_id }: GetAll) {

            const query = {
                text: `
                SELECT item_count, product_name, price, image, description FROM cart_items
                JOIN users 
                ON users.user_id = cart_items.user_id 
                JOIN products 
                ON products.product_id = cart_items.product_id 
                WHERE users.user_id = $1
            `,
                values: [user_id],
            }

            const res = await pool.query(query);
            return res.rows
        },

        async addOne({ user_id, product_id }: Cart) {

            const query = {
                text: 'INSERT INTO cart_items (user_id, product_id) VALUES($1, $2)',
                values: [user_id, product_id],
            }

            const res = await pool.query(query)
            return res.rows
        },

        async increment({ cart_item_id }: { cart_item_id: number }) {

            const query = {
                text: `
                UPDATE products
                SET item_count = item_count + 1, 
                WHERE cart_product_id = $1;
                `,
                values: [ cart_item_id ],
            }

            const res = await pool.query(query)
            return res.rows
        },

        async decrement({ cart_item_id }: { cart_item_id: number }) {

            const query = {
                text: `
                UPDATE products
                SET item_count = item_count - 1, 
                WHERE cart_product_id = $1;
                `,
                values: [ cart_item_id ],
            }

            const res = await pool.query(query)
            return res.rows
        },

    }

}