import { Cart } from "../models/cart";
import { Request, Response } from "express";


export async function getCart(req: Request, res: Response) {

    try {
        // test data - will get data from JWT via Locals

        const data = await Cart().getAll({ user_id: 1 })
        return res.status(200).json({ success: true, data })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

export async function addToCart(req: Request, res: Response) {

    try {
        const productToAdd = req.body;
        const data = await Cart().addOne(productToAdd)
        return res.status(200).json({ success: true, data })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}


export async function setCartItemAmount(req: Request, res: Response) {

    try {
        const productToSet = req.body;

        if (productToSet.increment) {
            await Cart().increment(productToSet)
        } else {
            await Cart().decrement(productToSet)
        }
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

export async function deleteCartItem(req: Request, res: Response) {

    try {
        const productToSet = req.body;
        await Cart().delete(productToSet)
        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

