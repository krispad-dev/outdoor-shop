import { Cart } from "../models/Cart";
import { Product } from "../models/Product";
import { Request, Response } from "express";


interface OrderProductsController {
    product_id: number;
    in_stock: number;
    item_count: number;
}


export async function orderProducts(req: Request, res: Response) {
    try {

        const { id } = res.locals.loggedInUser; // User id from token 

        const cart = await Cart().getAll({ user_id: id })
        cart.forEach(async ({ product_id, in_stock, item_count }: OrderProductsController) => {
            const newStockValue = in_stock - item_count
            await Product().adjustStock({ product_id: product_id, in_stock: newStockValue })
        })

        await Cart().deleteAll({ user_id: id })

        return res.status(200).json({ success: true, message: 'Köp genomfört' })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

