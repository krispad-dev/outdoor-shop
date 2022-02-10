import { Cart } from "../models/Cart";
import { Product } from "../models/Product";
import { Request, Response } from "express";


export async function orderProducts(req: Request, res: Response) {
    try {

        const { id } = res.locals.loggedInUser; // User id from token 

        const data = await Cart().getAll({ user_id: id })

        data.forEach(async ({ product_id, in_stock, item_count }: { product_id: number, in_stock: number, item_count: number }) => {

            const newStockValue = in_stock - item_count


            await Product().adjustStock({ product_id: product_id, in_stock: newStockValue })

        })



        return res.status(200).json({ success: true, message: 'Köp genomfört' })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

