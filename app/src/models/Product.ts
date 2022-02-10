import { pool } from '../database/pg'


interface Product {

    product_name: string;
    description: string;
    price: number;
    in_stock: number;
    image: string;
    category: string;

}

interface updateOne {

    product_name: string;
    description: string;
    price: number;
    in_stock: number;
    product_id: number;
    image: string;
    category: string;
}


export function Product() {

    return {

        async getAll() {
            const res = await pool.query('SELECT * FROM products')
            return res.rows
        },

        async getOne({ product_id }: { product_id: | string  }) {
            const query = {
                text: 'SELECT * FROM products WHERE product_id = $1',
                values: [ product_id ]
            }

            const res = await pool.query(query)
            return res.rows[0]
        },

        async addOne({ product_name, description, in_stock, price, image, category }: Product) {
 
            const query = {
                text:'INSERT INTO products (product_name, description, in_stock, price, image, category ) VALUES($1, $2, $3, $4, $5, $6)',
                values: [product_name, description, in_stock, price, image, category],
              }
              
            const res = await pool.query(query)
            return res.rows
        },

        async update({ product_id, product_name, description, in_stock, price, image, category }: updateOne) {

            const query = {
                text:`    
                UPDATE products
                SET product_name = $1, description = $2, price = $3, in_stock = $4, image = $5, category = $6
                WHERE product_id = $6;
            `,
                values: [product_name, description, in_stock, price, product_id, image, category],
              }
              
            const res = await pool.query(query)
            return res.rows
        },

        async adjustStock({ product_id, in_stock }: { product_id: number, in_stock: number }) {

            console.log(product_id);
            

            const query = {
                text:`    
                UPDATE products
                SET in_stock = $1
                WHERE product_id = $2;
            `,
                values: [ in_stock, product_id ],
              }
              
            const res = await pool.query(query)
            return res.rows
        },

        async delete({ product_id }: { product_id: number }) {

            const query = {
                text:`DELETE FROM products WHERE product_id = $1`,
                values: [product_id],
              }
              
            const res = await pool.query(query)
            return res.rows
        }

    }

}