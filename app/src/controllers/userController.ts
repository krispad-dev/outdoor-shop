import { User } from "../models/user";
import { Request, Response } from "express";

export async function registerUser(req: Request, res: Response) {

    try {
        const newUser = req.body;
        User().addOne(newUser)
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

export async function getUsers(req: Request, res: Response) {

    try {
        const data = await User().getAll()
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}