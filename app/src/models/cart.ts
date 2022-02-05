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
                text:`SELECT users.user_id, cart_item_id, product_name, price, item_count, image, description
                FROM cart_items 
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

        async addOne({ user_id, product_id }: {  user_id: number, product_id: number }) {

            const query = {
                text: 'INSERT INTO cart_items (user_id, product_id) VALUES($1, $2)',
                values: [user_id, product_id],
            }

            const res = await pool.query(query)
            return res.rows
        },

        async increment({ cart_item_id }: { cart_item_id: number }) {

            console.log(cart_item_id);


            const query = {
                text: `
                UPDATE cart_items
                SET item_count = item_count + 1 
                WHERE cart_item_id = $1;
                `,
                values: [cart_item_id],
            }

            const res = await pool.query(query)
            return res.rows
        },

        async decrement({ cart_item_id }: { cart_item_id: number }) {

            const query = {
                text: `
                UPDATE cart_items
                SET item_count = item_count - 1
                WHERE cart_item_id = $1;
                `,
                values: [cart_item_id],
            }

            const res = await pool.query(query)
            return res.rows
        },

        async delete({ cart_item_id, user_id }: { cart_item_id: number, user_id: number }) {

            const query = {
                text: 'DELETE FROM cart_items WHERE cart_item_id = $1 AND user_id = $2',
                values: [cart_item_id, user_id],
            }

            const res = await pool.query(query)
            return res.rows
        },

    }

}