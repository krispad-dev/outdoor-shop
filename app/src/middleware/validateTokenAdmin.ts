import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { parseError } from "../helpers/parseError";

export async function validateTokenAdmin(req: Request, res: Response, next: NextFunction) {

    try {

        const { authToken } = req.cookies;
        const isVerified = await jwt.verify(authToken, process.env.SECRET as string)

        console.log(isVerified);
        

        if (isVerified.role !== 'admin') {
            throw Error('You do not have admin privileges')
        }

        res.locals.loggedInUser = {
            username: isVerified.username,
            role: isVerified.role,
            email: isVerified.email,
            id: isVerified.userId,
            city: isVerified.city,
            address: isVerified.address,
            zipCode: isVerified.zipCode,
        }
        next()
    } catch (error) {
        return res.status(401).json({ success: false, error: parseError(error) })
    }

}