import { Product } from "../models/Product";
import { Request, Response } from "express";


export async function getAllProducts(req: Request, res: Response) {

    try {
        const data = await Product().getAll()
        return res.status(200).json({ success: true, data })

    } catch (error) {
        return res.status(400).json({ success: false, message: error })

    }
}

export async function getProduct(req: Request, res: Response) {

    try {

        const product = req.query as any

        const data = await Product().getOne(product)
        return res.status(200).json({ success: true, data }) 

    } catch (error) {
        return res.status(400).json({ success: false, message: error })

    }
}

export async function addProduct(req: Request, res: Response) {

    try {

        const newProduct = req.body

        const data = await Product().addOne(newProduct)

        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })

    }

}
export async function updateProduct(req: Request, res: Response) {   

    try {

        const newProduct = req.body

        const data = await Product().update(newProduct)

        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })

    }

}

export async function deleteProduct(req: Request, res: Response) {

    try {

        const product_id = req.body

        const data = await Product().delete(product_id)

        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })

    }

}