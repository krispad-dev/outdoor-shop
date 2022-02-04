import { Item } from "../models/Item";
import { Request, Response } from "express";




export async function getAllItems(req: Request, res: Response) {

    try {

        const data = await Item().getAll()
        return res.status(200).json({success: true, data })
    
    } catch (error) {
        return res.status(400).json({success: false, message: error })
        
    }

    
}

export async function addItem(req: Request, res: Response) {

    try {

        const data = await Item().addOne({

            name: 'CoolBall', 
            isPurchased: true 
        
        })

        return res.status(200).json({success: true, data })
    } catch (error) {
        return res.status(400).json({success: false, message: error })
        
    }

    
}