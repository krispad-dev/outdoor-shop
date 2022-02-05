import { Request, Response, NextFunction } from "express";
import { bcCompare } from "../helpers/bCrypt";

export async function authUser(req: Request, res: Response, next: NextFunction) {

    try {

        const { user_password, user_id } = req.body;  

        res.locals.loggedInUser = { username: 'testUser' }
        next()
    } catch (error) {
        return error
    }


}