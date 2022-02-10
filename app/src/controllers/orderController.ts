import { Cart } from "../models/Cart";
import { Product } from "../models/Product";
import { Request, Response } from "express";


interface OrderProductsController {
    product_id: number;
    in_stock: number;
    item_count: number;
    cart_item_id: number;
    user_id: number;
}


export async function orderProducts(req: Request, res: Response) {
    try {

        const { id } = res.locals.loggedInUser; // User id from token 

        const cart = await Cart().getAll({ user_id: id })
        cart.forEach(async ({ product_id, in_stock, item_count, cart_item_id, user_id }: OrderProductsController ) => {

            const newStockValue = in_stock - item_count
            await Product().adjustStock({ product_id: product_id, in_stock: newStockValue })
            await Cart().delete({ cart_item_id: cart_item_id, user_id: user_id })

        })

        return res.status(200).json({ success: true, message: 'Köp genomfört' })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

