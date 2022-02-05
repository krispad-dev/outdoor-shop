import { Request, Response } from 'express'

import { bcCompare } from '../helpers/bCrypt';
import { User } from '../models/User';
import { parseError } from '../helpers/parseError';
import jwt from 'jsonwebtoken'



export async function loginUser(req: Request, res: Response) {


    try {
        const { user_id, user_password } = req.body;
        const userTryingToLogIn = await User().getOne({ user_id: user_id })

        if (!await bcCompare(user_password, userTryingToLogIn.user_password)) {
            throw Error('Unauthorized - password is not a match')
        }

        const jwtPayload = {
            userId: userTryingToLogIn.user_id,
            username: userTryingToLogIn.user_name,
            email: userTryingToLogIn.email,
            role: userTryingToLogIn.role,
        };

        const authToken = jwt.sign(
            jwtPayload, 
            process.env.SECRET as string, 
            { expiresIn: '1h' 
        })

        return res
        .cookie(
            'authToken', 
            authToken, /* { 
                sameSite: 'strict', 
                httpOnly: true, 
                secure: true, 
            } */)

        .json({
            success: true, message:
                `You are logged in as ${userTryingToLogIn.role}`
        })

    } catch (error) {
        return res.status(401).json({ success: false, error: parseError(error) })
    }
}