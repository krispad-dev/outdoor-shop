import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { parseError } from "../helpers/parseError";

export async function authUser(req: Request, res: Response, next: NextFunction) {

    try {


        const { authToken } = req.cookies;
        const isVerified = await jwt.verify(authToken, process.env.SECRET as string)

        if (!isVerified) {
            throw Error('Unauthorized')
        }

        res.locals.loggedInUser = {
            username: isVerified.username,
            role: isVerified.role,
            email: isVerified.email
        }
        next()
    } catch (error) {
        return res.status(401).json({ success: false, error: parseError(error) })
    }

}