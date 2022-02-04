import { User } from "../models/User";
import { Request, Response } from "express";
import { bcHash } from "../helpers/bCrypt";


export async function registerUser(req: Request, res: Response) {

    try {

        const { user_password, user_name, email } = req.body;

        await User().addOne({
            user_name: user_name,
            email: email,
            user_password: await bcHash(user_password),
            role: 'user'
        })

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