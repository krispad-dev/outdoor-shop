import { Request, Response } from 'express'

import { bcCompare } from '../helpers/bCrypt';
import { User } from '../models/User';
import { parseError } from '../helpers/parseError';
import jwt from 'jsonwebtoken'



export async function loginUser(req: Request, res: Response) {    

    try {
        const { user_password, email } = req.body;
        const userTryingToLogIn = await User().getOne({ email: email })
        

        if (!userTryingToLogIn) {
            throw Error('Vi hittar inte det angivna kontot')
        }
        
        if (!await bcCompare(user_password, userTryingToLogIn.user_password)) {
            throw Error('Lösenord matchar inte din epost')
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
            { expiresIn: '1h' }
        )

        return res.cookie(
            'authToken', 
            authToken,  { 
/*                 sameSite: 'strict', 
                httpOnly: true, 
                secure: true,  */
            })

        .json({
            success: true, message:
                `${userTryingToLogIn.user_name}, You are logged in as ${userTryingToLogIn.role}`
        })

    } catch (error) {
        return res.status(400).json({ 
            success: false, 
            type: parseError(error) === 'Lösenord matchar inte din epost' ? 'password' : 'email',
            error: parseError(error) 
        })
    }
}

export async function authUser(req: Request, res: Response) {

    try {
        const user = res.locals.loggedInUser; 
    
        res.json({ loggedIn: true, user, message: 'You are authenticated' });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
} 

export async function logoutUser(req: Request, res: Response) {

    try {
        res.clearCookie('authToken').status(200).json({ success: true, message: 'Logged out'});
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
} 