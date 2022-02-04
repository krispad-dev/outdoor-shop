import { pool } from '../database/pg'


interface Product {

    product_name: string;
    description: string;
    price: number;
    in_stock: number;

}

interface updateOne {

    product_name: string;
    description: string;
    price: number;
    in_stock: number;
    product_id: number;

}


export function Product() {

    return {

        async getAll() {
            const res = await pool.query('SELECT * FROM products')
            return res.rows
        },

        async addOne({ product_name, description, in_stock, price }: Product) {

            const query = {
                text:'INSERT INTO products (product_name, description, in_stock, price ) VALUES($1, $2, $3, $4)',
                values: [product_name, description, in_stock, price],
              }
              
            const res = await pool.query(query)
            return res.rows
        },

        async update({ product_id, product_name, description, in_stock, price }: updateOne) {


            const query = {
                text:`    
                UPDATE products
                SET product_name = $1, description = $2, price = $3, in_stock = $4  
                WHERE product_id = $5;
            `,
                values: [product_name, description, in_stock, price, product_id],
              }
              
            const res = await pool.query(query)
            return res.rows
        },

        async delete({ product_id }: { product_id: number }) {


            const query = {
                text:` DELETE FROM products WHERE product_id = $1`,
                values: [product_id],
              }
              
            const res = await pool.query(query)
            return res.rows
        }

    }

}