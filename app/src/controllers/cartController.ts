import { Cart } from "../models/Cart";
import { Request, Response } from "express";


export async function getCart(req: Request, res: Response) {

    try {

        const { id } = res.locals.loggedInUser; // User id from token 

        const data = await Cart().getAll({ user_id: id })
        return res.status(200).json({ success: true, data })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

export async function addToCart(req: Request, res: Response) {

    try {

        const { id } = res.locals.loggedInUser; // User id from token 
        const { product_id } = req.body; 

        const data = await Cart().addOne({ product_id: product_id, user_id: id})
        return res.status(200).json({ success: true, data })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}


export async function setCartItemAmount(req: Request, res: Response) {

    try {
        const isIncrement = req.body.increment;

        const { id } = res.locals.loggedInUser; // User id from token 
        const { cart_item_id } = req.body; 

        if (isIncrement) {
            await Cart().increment({ cart_item_id: cart_item_id, user_id: id})
        } else {
            await Cart().decrement({ cart_item_id: cart_item_id, user_id: id})
        }

        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

export async function deleteCartItem(req: Request, res: Response) {

    try {
        
        const { cart_item_id } = req.body;
        const { id } = res.locals.loggedInUser; // User id from token 

        await Cart().delete({ cart_item_id: cart_item_id, user_id: id})
        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

